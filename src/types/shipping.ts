export interface ShippingAddress {
    id?: string;
    fullName: string;
    country: string;
    state: string;
    city: string;
    street: string;
    postalCode: string;
    phone: string;
    isDefault?: boolean;
}

export interface BillingAddress extends ShippingAddress {
    company?: string;
    taxId?: string;
}

export interface ShippingRate {
    id: string;
    carrier: string;
    service: string;
    price: number;
    estimatedDays: number;
}