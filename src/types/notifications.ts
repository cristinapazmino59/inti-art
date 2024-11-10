export type NotificationType =
    | "order_status"
    | "payment_success"
    | "payment_failed"
    | "shipping_update"
    | "new_artwork"
    | "price_drop";

export interface Notification {
    id: string;
    userId: string;
    type: NotificationType;
    title: string;
    message: string;
    read: boolean;
    data?: Record<string, unknown>
    createdAt: Date;
}