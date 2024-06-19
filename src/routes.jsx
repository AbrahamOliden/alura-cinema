import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>

            </Main>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRoutes;