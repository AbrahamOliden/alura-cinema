import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import FavoritesProvider from "../../context/Favorites";

function BasePage() {
    return (
        <div role="none">
            <Header />
            <FavoritesProvider>
                <Main>
                    <Outlet />
                </Main>
            </FavoritesProvider>
            <Footer />
        </div>
    );
};

export default BasePage;