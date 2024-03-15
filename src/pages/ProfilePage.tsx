import { useNavigate } from "react-router-dom"
import authstore from "../store/authstore"
import { Button, Layout } from "antd"

export const ProfilePage = () => {
    const navigate = useNavigate()
    return (
        <Layout style={{ height: '100%', paddingTop: "35px" }}>
            <Layout>
                <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ flex: 1, padding: '20px' }}>
                        <div style={{ height: '100%' }}>
                            {authstore.auth ? (
                                <div>
                                    <h3>Имя: {authstore.nameUser}</h3>
                                    <h3>Фамилия: {authstore.surnameUser}</h3>
                                    <h3>Отчество: {authstore.patronymicUser}</h3>
                                    <h3>Почта: {authstore.emailUser}</h3>
                                    <Button onClick={() => {
                                        navigate("/login")
                                        authstore.exit()
                                    }}>Выйти</Button>
                                </div>
                            ) :
                                <Button onClick={() => navigate("/login")}>Зарегистрироваться</Button>
                            }
                        </div>
                    </div>
                </div>
            </Layout>
        </Layout>
    )
}