export interface IPropertyDetails {
    id: string;
    area: number;
    ratings: number;
    propertyName: string;
    price: number;
    images: string[];
    features: IFeatures;
    seller: ISeller;
    location: ILocation;
    category: string;
}

export interface IFeatures {
    bhk: number;
    baths: number;
    parking: number;
}

export interface ISeller {
    sellerName: string;
    sellerMobile: number;
    sellerEmail: string;
}

export interface ILocation {
    city: string;
    pincode: number;
    address: string;
    state: string;
}