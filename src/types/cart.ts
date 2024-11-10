import { Artwork } from "./artwork";

export interface CartItem {
    id: string;
    artworkId: string;
    quantity: number;
    price: number;
    artwork: Artwork;
}

export interface Cart {
    id: string;
    userId?: string;
    items: CartItem[];
    subtotal: number;
    tax: number;
    shippingCost: number;
    total: number;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
}