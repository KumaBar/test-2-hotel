import { useParams } from "react-router-dom"
import hotelsStore from "../store/hotelsStore"
import { Carousel, Layout } from "antd"
import hotelImg from '../images/hotel.jpg'
export const HotelPage = () => {
    const { id } = useParams()

    const hotel = hotelsStore.hotels.find(h => h.id.toString() === id)

    return (
        <Layout style={{ paddingTop: "55px", height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {hotel ? (
                <div style={{ width: '80%', maxWidth: '600px', textAlign: 'center' }}>
                    <div style={{ fontSize: "24px" }}>
                        <div>Название отеля: {hotel.name}</div>
                        <div>Адресс: {hotel.addres}</div>
                        <div>Цена: {hotel.price} {hotel.valute}</div>
                        <div>Звезд: {hotel.stars}</div>
                        <Carousel style={{ maxWidth: "500px", margin: '20px auto' }}>
                            <div>
                                <img src={hotelImg} alt="#" style={{ maxWidth: "500px" }} />
                            </div>
                            <div>
                                <img src={hotelImg} alt="#" style={{ maxWidth: "500px" }} />
                            </div>
                            <div>
                                <img src={hotelImg} alt="#" style={{ maxWidth: "500px" }} />
                            </div>
                            <div>
                                <img src={hotelImg} alt="#" style={{ maxWidth: "500px" }} />
                            </div>
                        </Carousel>
                        <div>{hotel.description}</div>
                    </div>
                </div>
            ) : (
                <div>Отель не найден</div>
            )}
        </Layout>
    )
}