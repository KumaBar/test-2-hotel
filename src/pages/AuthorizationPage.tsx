import React, { useState } from "react"
import Authstore from "../store/authstore"
import { useNavigate } from "react-router-dom"
import { Button, Form, Input } from "antd"
type FieldType = {
    username?: string;
    surname?: string;
    patronymic?: string,
    password?: string;
    remember?: string;
    email?: string;
};

const validateEmail = (email: string) => {
    // Регулярное выражение для проверки формата email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

export const AuthorizationPage: React.FC = () => {
    const [userText, setUserText] = useState<string>("")
    const [surnameText, setSurnameText] = useState<string>("")
    const [patronymicText, setPatronymicText] = useState<string>("")
    const [passwordText, setPasswordText] = useState<string>("")
    const [emailText, setEmailText] = useState<string>("")
    const navigate = useNavigate()

    //типо валидация
    function onClickAuthButton(e: React.MouseEvent<HTMLButtonElement>) {
        if (userText.length !== 0 && surnameText.length !== 0 && patronymicText.length !== 0 && passwordText.length !== 0 && emailText.length !== 0) {
            Authstore.authorization(userText, surnameText, patronymicText, passwordText, emailText)
            navigate("/")
        }
    }
    return (
        <div style={{ paddingTop: "75px" }}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600, margin: "0 auto" }}
                initialValues={{ remember: true }}
                autoComplete="off"

            >
                <Form.Item<FieldType>
                    label="Имя"
                    name="username"
                    rules={[{ required: true, message: 'Введите свое имя' }]}
                >
                    <Input value={userText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserText(e.target.value)} />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Фамилия"
                    name="surname"
                    rules={[{ required: true, message: 'Введите свою фамилию' }]}
                >
                    <Input value={surnameText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurnameText(e.target.value)} />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Отчество"
                    name="patronymic"
                    rules={[{ required: true, message: 'Введите свое отчество' }]}
                >
                    <Input value={patronymicText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPatronymicText(e.target.value)} />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Введите свой пароль' }]}
                >
                    <Input.Password value={passwordText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordText(e.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Почта"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Введите свою почту'
                        },
                        {
                            validator: (_, value) => {
                                if (validateEmail(value)) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('Некорректный формат почты');
                            },
                        }
                    ]}
                >
                    <Input
                        value={emailText}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailText(e.target.value)}
                    />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" onClick={onClickAuthButton}>
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
