import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";
import videos from "../../data/db.json";

import styles from './index.module.css';

function Home() {
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