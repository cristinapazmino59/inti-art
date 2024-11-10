import { Artwork } from "./artwork";
import { BillingAddress, ShippingAddress } from "./shipping";

export type OrderStatus = 
    | "pending"
    | "paid"
    | "processing"
    | "shipped"
    | "delivered"
    | "canceled"
    | "refunded";


export interface OrderItem {
    id: string;
    orderId: string;
    artworkId: string;
    quantity: number;
    priceAtPurchase: number;
    artwork: Artwork;
}

export interface Order {
    id: string;
    userId: string;
    items: OrderItem[];
    status: OrderStatus;
    shippingAddress: ShippingAddress
    billingAddress?: BillingAddress
    subtotal: number;
    tax: number;
    shippingCost: number;
    total: number;
    paymentIntent?: string;
    stripeSessionId?: string;
    paidAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
