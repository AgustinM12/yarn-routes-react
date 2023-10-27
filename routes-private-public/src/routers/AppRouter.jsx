import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PrivateRoutes } from "./PrivateRoutes"
import { HomeRoutes } from "./HomeRoutes"
import { Login } from "../pages/Login"
import { Error } from "../pages/404"
import { PublicRoutes } from "./PublicRoutes"

export const AppRouter = () => {
    return (

        <BrowserRouter>
            <Routes>
                {/* RUTAS PUBLICAS */}
                <Route path="/auth/*" element={
                    <PublicRoutes>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/*" element={<Login />} />
                        </Routes>
                    </PublicRoutes>

                } />

                {/* RUTAS PRIVADAS */}
                <Route path="/*" element={
                    <PrivateRoutes>
                        <HomeRoutes />
                    </PrivateRoutes>
                } />

                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>

    )
}
