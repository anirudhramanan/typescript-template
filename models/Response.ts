export interface BrowseResponse {
    productCard: Product[];
    footer: Footer;
}

export interface Product {
    title: string;
    image: Image;
    ratings: Rating;
    featuresList: string[];
    freeDelivery: boolean;
    price: Price;
    exchangeOfferDiscount: Discount;
    bankOffersLink: Button;
    productPageLink: Action;
}

export interface Image {
    height: number;
    width: number;
    url: string;
    alt: string;
}

export interface Rating {
    overallRating: number;
    totalRatingsNum: number;
    totalReviewsNum: number;
}

export interface Price {
    mrp: number;
    finalPrice: number;
    discount: Discount;
}

export interface Discount {
    type: string;
    data: number;
}

export interface Button {
    buttonText: string;
    action: Action;
    textColor: string;
}

export interface Action {
    type: string;
    url: string;
}

export interface ColumnItem {
    title: string;
    dataType: string;
    data: string | string[];
}

export interface LowerColumnItems {
    img: string;
    text: string;
}

export interface Footer {
    colunms: ColumnItem [];
    bottomColumns: LowerColumnItems[];
}
