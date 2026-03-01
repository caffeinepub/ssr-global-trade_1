import Map "mo:core/Map";
import Text "mo:core/Text";

module {
  type Product = {
    #hairBundles;
    #closuresAndFrontals;
    #customWigs;
    #bulkSupply;
    #oemPrivateLabel;
  };

  type QuoteRequest = {
    fullName : Text;
    email : Text;
    companyName : Text;
    product : Product;
    requirements : Text;
  };

  type Actor = {
    quoteRequests : Map.Map<Text, QuoteRequest>;
    contactInfo : {
      email : Text;
      phone : Text;
      location : Text;
    };
    businessHours : {
      mondayToFriday : Text;
      saturday : Text;
      sunday : Text;
    };
    whatsappLink : Text;
  };

  public func run(old : Actor) : Actor {
    { old with whatsappLink = "https://wa.me/918918832546" };
  };
};
