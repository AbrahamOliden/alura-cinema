import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";
import styles from './index.module.css';
import { useState, useEffect } from "react";

function Home() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/AbrahamOliden/alura-cinema-api/videos")
            .then(response => response.json())
            .then(data => setVideos(data))
            .catch(error => console.log(error));
    },[]);

    return (
        <>
            <Banner img='home' color="#154580" />
            <Title text='Un lugar para guardar sus videos favoritos' />
            <section className={styles.container} >
                {
                videos.map(video => {
                    return <Card {...video}
                        key={video.id}
                    />
                })
                }
            </section>
        </>
    );
};

export default Home;