
import { Navigate, Outlet } from "react-router-dom"
import AuthStore from "../store/authstore"
import { observer } from "mobx-react"

export const PrivateRoute: React.FC = observer(() => {
    return (
        AuthStore.auth ?
            <Outlet /> : <Navigate to="/login" />
    )
})







