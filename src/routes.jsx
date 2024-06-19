import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import FavoritesProvider from "./context/Favorites";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Main>
                <FavoritesProvider>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path="/favorites" element={<Favorites />} />
                    </Routes>
                </FavoritesProvider>

            </Main>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRoutes;