import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Title from "../../components/Title";

function Home() {
    return (
        <>
            <Header />
            <Banner img='home' color="#154580" />
            <Title text='Un lugar para guardar sus videos favoritos' />
            <Footer />
        </>
    );
};

export default Home;