import { Order } from "./order";
import { ShippingAddress } from "./shipping";

export type UserRole = "user" | "admin";

export interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
    role: UserRole;
    shippingAddresses: ShippingAddress[]
    orders: Order[]
    createdAt: Date;
    updatedAt: Date;
}