import { observer } from "mobx-react"
import hotelsStore from "../store/hotelsStore"
import { BookingHotel } from "../components/BookingHotel"
import { Layout } from "antd"
export const BookingPage = observer(() => {
    return (
        <Layout style={{ height: '100%', paddingTop: "35px" }}>
            <Layout>
                <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ flex: 1, padding: '20px' }}>
                        <div style={{ height: '100%' }}>
                            {hotelsStore.bookingHotels.length > 0 ? hotelsStore.bookingHotels.map((h) =>
                                <BookingHotel key={h.id} {...h} />)
                                :
                                <div>Отели не забронированы</div>
                            }
                        </div>
                    </div>
                </div>
            </Layout>
        </Layout>
    )
})