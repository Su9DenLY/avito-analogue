export type ItemType = "Недвижимость" | "Авто" | "Услуги";

export interface BaseAd {
    id: number;
    name: string;
    description: string;
    location: string;
    photos?: string[];
    type: ItemType;
}

export interface RealEstateAd extends BaseAd {
    type: "Недвижимость";
    propertyType: string;
    area: number;
    rooms: number;
    price: number;
}

export interface AutoAd extends BaseAd {
    type: "Авто";
    brand: string;
    model: string;
    year: number;
    mileage?: number;
}

export interface ServiceAd extends BaseAd {
    type: "Услуги";
    serviceType: string;
    experience: number;
    cost: number;
    schedule?: string;
}

export type AdItem = RealEstateAd | AutoAd | ServiceAd;

export interface AdFormData {
    name: string;
    description: string;
    location: string;
    photos?: string[];
    type: ItemType;

    propertyType?: string;
    area?: number;
    rooms?: number;
    price?: number;

    brand?: string;
    model?: string;
    year?: number;
    mileage?: number;

    serviceType?: string;
    experience?: number;
    cost?: number;
    schedule?: string;
}
