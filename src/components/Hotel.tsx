import { Button, Col, Modal, Row, DatePicker, Space, DatePickerProps, Input, Select } from "antd"
import { IHotel } from "../type/types"
import hotelImg from '../images/hotel.jpg'
import Authstore from "../store/authstore"
import HotelsStore from "../store/hotelsStore"
import { NavLink, useNavigate } from "react-router-dom";
import authstore from "../store/authstore"
import { useEffect, useState } from "react"
import { RangePickerProps } from "antd/es/date-picker"
import hotelsStore from "../store/hotelsStore"


const { RangePicker } = DatePicker;


export const Hotel: React.FC<IHotel> = ({ id, name, addres, stars, price, valute }) => {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [entryDate, setEntryDate] = useState<any>();
    const [exitDate, setExitDate] = useState<any>();
    const [guestBooking, setGuestBooking] = useState<any>();
    const [carRental, setCarRental] = useState<any>(false);
    const [excursions, setExcursions] = useState<any>(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
        console.log('onOk: ', value);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleClickBooking = () => {
        if (Authstore.auth === false) {
            navigate("/login")
        } else {
            showModal()

        }
    }
    const onChangeDate = (
        value: DatePickerProps['value'] | RangePickerProps['value'],
        dateString: [string, string] | string,
    ) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
        setEntryDate(dateString[0])
        setExitDate(dateString[1])
    };
    const handleSubmitBooking = () => {
        HotelsStore.addBookingHotels(id, "На рассмотрении", entryDate, exitDate, guestBooking, carRental, excursions)
        console.log(HotelsStore.bookingHotels)

    }
    //any стоит потому что никак иначе
    const handleChangeCarRental = (value: boolean) => {
        setCarRental(value)
    }
    const handleChangeExcursions = (value: boolean) => {
        setExcursions(value)
    }
    return (
        <div>
            <Row gutter={[32, 32]} style={{ marginBottom: '20px' }}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} style={{ marginTop: '20px' }} >
                    <div style={{ maxWidth: "100%" }}>
                        <img src={hotelImg} alt="#" style={{ maxWidth: "100%" }} />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16} style={{ margin: '0 auto' }}>
                    <h3 >
                        <NavLink to={`/${id}`}>
                            {name}
                        </NavLink>
                    </h3>
                    <p >{addres}</p>
                    <p >Звезд: {stars}</p>
                    <h3 >{new Intl.NumberFormat("ru").format(price)} {valute}</h3>
                    <Button onClick={handleClickBooking}>Забронировать</Button>
                </Col>
            </Row>
            <Modal title="Форма бронирования" open={isModalOpen} footer={null} onOk={handleOk} onCancel={handleCancel} style={{ maxWidth: "400px" }}>
                <div style={{ marginBottom: "10px" }}>Дата:</div>
                <Space direction="vertical" size={12}>
                    <RangePicker
                        format="YYYY-MM-DD"
                        onChange={onChangeDate}
                        onOk={onOk}
                        style={{ marginBottom: "10px" }}
                    />
                </Space>
                <div style={{ marginBottom: "10px" }}>Гости:</div>
                <Input type="number"
                    placeholder="Кол-во гостей"
                    onChange={(e) => setGuestBooking(e.target.value)}
                    style={{ width: "280px", marginBottom: "10px" }}
                />
                <div style={{ marginBottom: "10px" }}>Аренда машины:</div>
                <Space wrap >
                    <Select
                        defaultValue={carRental}
                        style={{ width: 120 }}
                        onChange={handleChangeCarRental}
                        options={[
                            { value: true, label: 'Да' },
                            { value: false, label: 'Нет' },
                        ]}
                    />
                </Space>
                <div style={{ marginBottom: "10px" }}>Экскурсии:</div>
                <Space wrap >
                    <Select
                        defaultValue={excursions}
                        style={{ width: 120 }}
                        onChange={handleChangeExcursions}
                        options={[
                            { value: true, label: 'Да' },
                            { value: false, label: 'Нет' },
                        ]}
                    />
                </Space>
                <div style={{ marginTop: "20px" }} >
                    <Button onClick={handleSubmitBooking} >Забронировать</Button>
                </div>

            </Modal>
        </div>
    )
}