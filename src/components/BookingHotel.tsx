import { Button, Col, Row } from "antd"
import { IBooking, IHotel } from "../type/types"
import hotelImg from '../images/hotel.jpg'
import Authstore from "../store/authstore"
import HotelsStore from "../store/hotelsStore"
import { useNavigate } from "react-router-dom";
import authstore from "../store/authstore"
import { useState } from "react"
export const BookingHotel: React.FC<IBooking> = ({ id, status, name, addres, stars, price, valute, entry, exit, guest, carRental, excursions }) => {
    const navigate = useNavigate()
    const [currentStatus, setCurrentStatus] = useState(status)
    return (
        <Row gutter={[32, 32]} style={{ marginBottom: '20px' }}>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} style={{ marginTop: '20px' }} >
                <div style={{ maxWidth: "100%" }}>
                    <img src={hotelImg} alt="#" style={{ maxWidth: "100%" }} />
                </div>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16} style={{ margin: '0 auto' }}>
                <h3 >{name} Статус бронирования: {status}</h3>
                <p >{addres}</p>
                <p >Звезд: {currentStatus}</p>
                <h3 >{new Intl.NumberFormat("ru").format(price)} {valute}</h3>
                <p >Приезд:{JSON.stringify(entry)}  Отъезд: {JSON.stringify(exit)}</p>
                <p >Гости: {guest}</p>
                <p >Услуга Аренда машины: {carRental ? <>Да</> : <>Нет</>}</p>
                <p >Услуга Экскурсиия: {excursions ? <>Да</> : <>Нет</>}</p>
            </Col>
        </Row>
    )
}