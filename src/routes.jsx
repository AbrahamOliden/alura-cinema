import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRoutes;