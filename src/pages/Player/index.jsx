import { useParams } from "react-router-dom";
import styles from "./Player.module.css";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import videos from "../../data/db.json";
import NotFound from "../NotFound";
import { useEffect, useState } from "react";

function Player() {

    const [video, setVideo] = useState([]);
    const params = useParams();
    // const video = videos.find(video => video.id === Number(params.id));

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/AbrahamOliden/alura-cinema-api/videos?id=${params.id}`)
            .then(response => response.json())
            .then(data => setVideo(...data))
            .catch(error => console.log(error));
    },[])

    if (!video) return <NotFound />

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