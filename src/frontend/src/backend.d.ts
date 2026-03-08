import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface QuoteRequest {
    fullName: string;
    email: string;
    companyName: string;
    requirements: string;
    product: Product;
}
export enum Product {
    oemPrivateLabel = "oemPrivateLabel",
    hairBundles = "hairBundles",
    bulkSupply = "bulkSupply",
    customWigs = "customWigs",
    closuresAndFrontals = "closuresAndFrontals"
}
export interface backendInterface {
    getAllQuoteRequests(): Promise<Array<QuoteRequest>>;
    getBusinessHours(): Promise<{
        saturday: string;
        sunday: string;
        mondayToFriday: string;
    }>;
    getContactInfo(): Promise<{
        email: string;
        phone: string;
        location: string;
    }>;
    getQuoteRequest(id: string): Promise<QuoteRequest>;
    getWhatsAppLink(): Promise<string>;
    submitQuoteRequest(id: string, fullName: string, email: string, companyName: string, product: Product, requirements: string): Promise<void>;
}
