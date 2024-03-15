import { Menu } from "antd"
import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        <Menu theme="dark" mode="horizontal" style={{ position: "fixed", zIndex: "10", display: "block", width: "100%" }}>

            <Menu.Item key="main">
                <NavLink to="/">
                    Главная
                </NavLink>
            </Menu.Item>

            <Menu.Item key="booking">
                <NavLink to="/booking">
                    Брони
                </NavLink>
            </Menu.Item>
            <Menu.Item key="profile">
                <NavLink to="/profile">
                    Профиль
                </NavLink>
            </Menu.Item>


        </Menu >
    )
}