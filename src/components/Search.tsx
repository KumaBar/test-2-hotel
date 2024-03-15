import { Button, Checkbox, Col, GetProp, Input, Modal, Radio, Row, Select } from "antd"
import { useState } from "react"
import hotelsStore from "../store/hotelsStore"

const opt = [
    {
        value: 'Москва',
        label: 'Москва',
    },
    {
        value: '​Санкт-Петербург',
        label: '​Санкт-Петербург',
    },
    {
        value: 'Сочи',
        label: 'Сочи',
    },
    {
        value: 'Владивосток',
        label: 'Владивосток',
    },
    {
        value: 'Новосибирск',
        label: 'Новосибирск',
    },
    {
        value: 'Краснодар',
        label: 'Краснодар',
    },
]
export const Search = () => {
    const [address, setAddress] = useState<string>("Москва")
    const [stars, setStars] = useState<number>(3)
    const [price, setPrice] = useState<number>(11000)

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChangeStars: GetProp<typeof Radio.Group, 'onChange'> = (e) => {
        console.log('checked = ', e.target.value);
        setStars(parseInt(e.target.value));
    };
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (/^\d*$/.test(inputValue) && parseInt(inputValue) <= 99999) {
            setPrice(parseInt(inputValue));
        }
    };
    const onSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(address, stars, price)
        hotelsStore.filterHotel(address, stars, price)
    }
    const onReboot = (e: React.MouseEvent<HTMLButtonElement>) => {
        hotelsStore.rebootHotels()
    }
    return (
        <div style={{ position: "fixed", margin: "0 auto", paddingTop: "35px", paddingRight: "10px" }}>
            <Row gutter={16}>
                <Col span={24}>
                    <Button block type="primary" style={{ width: '200px', marginBottom: '10px' }} onClick={showModal}>{address}</Button>
                    <Button block type="primary" style={{ width: '200px', marginBottom: '10px' }} onClick={showModal}>Звезды: {stars}</Button>
                    <Button block type="primary" style={{ width: '200px', marginBottom: '10px' }} onClick={showModal}>Цена: {price}</Button>
                </Col>
            </Row>
            <div style={{ marginTop: '20px', borderRadius: '10px', backgroundColor: '##FF69B4', padding: '10px', width: '200px' }}>
                <Button block type="primary" onClick={onSearch} style={{ marginBottom: "20px" }}>Найти</Button>
                <Button block type="primary" onClick={onReboot}>Сбросить</Button>
            </div>
            <Modal title="Форма поиска" open={isModalOpen} footer={null} onOk={handleOk} onCancel={handleCancel} style={{ maxWidth: "400px" }}>
                <div style={{ marginBottom: "10px" }}>Город:</div>
                <Select
                    showSearch
                    style={{ width: "350px" }}
                    placeholder="Выберите город"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={opt}
                    onChange={setAddress}
                />
                <div style={{ marginTop: "10px", marginBottom: "10px" }}>Звезды:</div>
                <Radio.Group style={{ width: '100%', marginBottom: "10px" }} onChange={onChangeStars}>
                    <Row >
                        <Col span={4}>
                            <Radio value="1">1</Radio>
                        </Col>
                        <Col span={4}>
                            <Radio value="2">2</Radio>
                        </Col>
                        <Col span={4}>
                            <Radio value="3">3</Radio>
                        </Col>
                        <Col span={4}>
                            <Radio value="4">4</Radio>
                        </Col>
                        <Col span={4}>
                            <Radio value="5">5</Radio>
                        </Col>
                    </Row>
                </Radio.Group>
                <div style={{ marginBottom: "10px" }}>Цена:</div>
                <Input type="number" placeholder="Максимум: 99 999" onChange={handlePriceChange} />

            </Modal>
        </div>
    )
}