import { Route, Routes } from "react-router-dom"
import HomePage from "../Pages/HomePage/HomePage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage />} />
        </Routes>
    )
}

export default AppRoutes