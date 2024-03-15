import { makeAutoObservable } from "mobx"
import { IHotel, IBooking } from "../type/types"

const dataHotel: IHotel[] = [
    { id: 1, name: "Отель Максима Славия", city: "Москва", addres: " Москва, Ярославское шоссе, 44", stars: 3, price: 11000, valute: "₽", description: "Уютный отель в центре Москвы" },
    { id: 2, name: "Соло Апарт Медиана", city: " Санкт-Петербург", addres: " Санкт-Петербург, Малая Морская, 7", stars: 4, price: 23000, valute: "₽", description: "Современные апартаменты в центре Петербурга" },
    { id: 3, name: "Rosa Springs", city: "Сочи", addres: "Сочи, Медовея, 4", stars: 5, price: 15000, valute: "₽", description: "Роскошный отель у моря в Сочи" },
    { id: 4, name: "RP Ranovsky Park", city: "Сочи", addres: " Сочи, Депутатская, 14", stars: 4, price: 21000, valute: "₽", description: "Отель с современным дизайном в центре Сочи" },
    { id: 5, name: "RP Ranovsky Park", city: "Сочи", addres: " Сочи, Депутатская, 14", stars: 4, price: 21000, valute: "₽", description: "Отель с современным дизайном в центре Сочи" },
]
class HotelStore {
    hotels: IHotel[] = dataHotel
    favoriteHotels: IHotel[] = []
    bookingHotels: IBooking[] = []
    timerId: NodeJS.Timeout | null = null;
    constructor() {
        makeAutoObservable(this)
    }
    addBookingHotels(id: number, status: string, entry: Date, exit: Date, guest: number, carRental: boolean, excursions: boolean) {
        if (this.bookingHotels.some((booking) => booking.id === id)) {
            alert('Этот отель уже забронирован')
            return;
        }

        const hotel = this.hotels.find((h) => h.id === id);
        if (hotel) {
            this.bookingHotels.push({ ...hotel, status, entry, exit, guest, carRental, excursions });
            this.startTimer(hotel);
        }
    }
    startTimer(booking: IHotel) {
        const randomSeconds = Math.floor(Math.random() * 10) + 1;
        const randomStatus = Math.random() < 0.5 ? "Принято" : "Отклонено";


        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {

                const bookingIndex = this.bookingHotels.findIndex((bookingItem) => bookingItem.id === booking.id);
                if (bookingIndex !== -1) {
                    this.bookingHotels[bookingIndex].status = randomStatus;
                }

                resolve();
            }, randomSeconds * 1000);
        });
    }
    filterHotel(city?: string, stars?: number, price?: number) {
        console.log(city, stars, price)
        this.hotels = dataHotel.filter((hotel) => {
            if (
                (!city || hotel.city === city) &&
                (!stars || hotel.stars === stars) &&
                (!price || hotel.price <= price)
            ) {
                return true;
            }
            return false;
        });

    }
    rebootHotels() {
        this.hotels = dataHotel
    }

}
export default new HotelStore()

