import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AllUser from "./pages/AllUser";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard /> } />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/all-user" element={<AllUser />} />
            </Routes>
        </BrowserRouter>
    );
}

