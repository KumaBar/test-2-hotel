export interface IHotel {
    id: number
    name: string,
    city: string
    addres: string,
    stars: number,
    price: number,
    valute: string,
    description: string
}

export interface IBooking extends IHotel {
    status: string
    entry: Date,
    exit: Date,
    guest: number,
    carRental: boolean,
    excursions: boolean,
}