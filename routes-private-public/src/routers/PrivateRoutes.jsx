import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { Navigate } from "react-router-dom"

export const PrivateRoutes = ({ children }) => {

    const { isLogged } = useContext(AuthContext)

    return (!isLogged)
        ? (
            <Navigate to={"/auth/login"} />
        )
        : (
            children
        )
}
