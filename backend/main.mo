import Text "mo:core/Text";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Migration "migration";
import MixinStorage "blob-storage/Mixin";

// Apply migration using with-clause
(with migration = Migration.run)
actor {
  include MixinStorage();

  type Product = {
    #hairBundles;
    #closuresAndFrontals;
    #customWigs;
    #bulkSupply;
    #oemPrivateLabel;
  };

  module Product {
    public func toText(product : Product) : Text {
      switch (product) {
        case (#hairBundles) { "Hair Bundles" };
        case (#closuresAndFrontals) { "Closures & Frontals" };
        case (#customWigs) { "Custom Wigs" };
        case (#bulkSupply) { "Bulk Supply" };
        case (#oemPrivateLabel) { "OEM/Private Label" };
      };
    };
  };

  type QuoteRequest = {
    fullName : Text;
    email : Text;
    companyName : Text;
    product : Product;
    requirements : Text;
  };

  module QuoteRequest {
    public func compare(request1 : QuoteRequest, request2 : QuoteRequest) : Order.Order {
      Text.compare(request1.fullName, request2.fullName);
    };
  };

  let quoteRequests = Map.empty<Text, QuoteRequest>();

  let contactInfo = {
    email = "info@ssglobaltrade.com";
    phone = "+91 891 883 2546";
    location = "Haldia, West Bengal, India - 721657";
  };

  let businessHours = {
    mondayToFriday = "9:00 - 18:00 IST";
    saturday = "10:00 - 16:00 IST";
    sunday = "Closed";
  };

  let whatsappLink = "https://wa.me/918918832546"; // Updated link

  public shared ({ caller }) func submitQuoteRequest(
    id : Text,
    fullName : Text,
    email : Text,
    companyName : Text,
    product : Product,
    requirements : Text,
  ) : async () {
    if (quoteRequests.containsKey(id)) {
      Runtime.trap("Quote request with ID " # id # " already exists");
    };
    let quoteRequest : QuoteRequest = {
      fullName;
      email;
      companyName;
      product;
      requirements;
    };
    quoteRequests.add(id, quoteRequest);
  };

  public query ({ caller }) func getQuoteRequest(id : Text) : async QuoteRequest {
    switch (quoteRequests.get(id)) {
      case (null) { Runtime.trap("Quote request with ID " # id # " does not exist") };
      case (?quoteRequest) { quoteRequest };
    };
  };

  public query ({ caller }) func getAllQuoteRequests() : async [QuoteRequest] {
    quoteRequests.values().toArray();
  };

  public query ({ caller }) func getContactInfo() : async {
    email : Text;
    phone : Text;
    location : Text;
  } {
    contactInfo;
  };

  public query ({ caller }) func getBusinessHours() : async {
    mondayToFriday : Text;
    saturday : Text;
    sunday : Text;
  } {
    businessHours;
  };

  public query ({ caller }) func getWhatsAppLink() : async Text {
    whatsappLink;
  };
};
