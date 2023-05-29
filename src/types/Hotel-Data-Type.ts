interface HotelFeaturesType {
    name:`Gym` | `Restaurant` | `Swimming Pool` | `Wi-Fi`,
    value:boolean
}

export interface HotelsDataType {
    _id:string,
    name: string,
    location: string,
    rating: number,
    hotelImg: string,
    features: HotelFeaturesType[],
    continent: string,
    country:string,
    flagLogo:string
};