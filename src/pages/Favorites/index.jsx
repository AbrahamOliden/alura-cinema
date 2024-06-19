import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";
import styles from "./Favorites.module.css";
import { useFavoritesContext } from "../../context/Favorites";

function Favorites() {

  const { favorite } = useFavoritesContext();

  return (
    <>
    <Banner img="favoritos" color="#00BF63" />
    <Title text="Favoritos"/>
    <section className={styles.container} >
      {
        favorite.map( video => {
          return <Card 
            capa={video.image}
            titulo={video.title}
            id={video.id}
            key={video.id} />
        })
      }
    </section>
    </>
  );
};

export default Favorites;