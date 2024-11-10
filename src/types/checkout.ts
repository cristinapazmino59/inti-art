import { CartItem } from "./cart";
import { BillingAddress, ShippingAddress, ShippingRate } from "./shipping";

export type CheckoutStatus = "pending" | "completed" | "expired" | "failed";

export interface CheckoutSession {
    id: string;
    cartId: string;
    userId?: string;
    email: string;
    shippingAddress: ShippingAddress;
    billingAddress?: BillingAddress;
    selectShippingRate?: ShippingRate;
    items: CartItem[];
    subtotal: number;
    tax: number;
    shippingCost: number;
    total: number;
    paymentIntentId?: string;
    status: CheckoutStatus;
    expiresAt: Date;
}

export interface PaymentMethod {
    id: string;
    type: "card" | "paypal";
    last4?: string;
    brand?: string;
    expiryMonth?: number;
    expiryYear?: number;
}