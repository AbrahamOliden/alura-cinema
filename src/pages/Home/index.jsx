import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";

function Home() {
    return (
        <>
            <Header />
            <Banner img='home' color="#154580" />
            <Title text='Un lugar para guardar sus videos favoritos' />
            <Card 
                id={1} 
                title='Perro' 
                image='https://api.thecatapi.com/api/images/get?format=src&ype=png'/>
            <Footer />
        </>
    );
};

export default Home;