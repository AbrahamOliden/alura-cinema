import styles from "./Player.module.css";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import { useParams } from "react-router-dom";
import videos from "../../data/db.json";

function Player() {
    const params = useParams();
    const video = videos.find(video => video.id === Number(params.id));
    console.log(video);

    return (
    <>
        <Banner img="player" color="#BF008A" />
        <Title text="Player" />
        <section className={styles.container} >
            <iframe className={styles.player}
                width="100%"
                src={video.link}
                title={video.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
        </section>
    </>
    );
};

export default Player;