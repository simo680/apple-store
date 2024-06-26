export interface Characteristic {
    characteristic: string;
    unit_type: string;
    value: string;
}

export interface Product {
    id: number;
    createdAt: string;
    price: number;
    discount_price: number | null;
    guarantee: number;
    rating: number;
    count_review: number;
    is_available: boolean;
    store_address: string | null;
    color: string;
    brand: string;
    country: string;
    category: string;
    name: string;
    images: string[];
    characteristics: Characteristic[];
    isInCart: boolean;
}

export interface Filter {
    name: string;
    values: {
        value: string;
        status: boolean;
    }[];
}

export interface Subcategory {
    id: number;
    name: string;
}

export type productTypeId = 1 | 2 | 3 | 4 | 5