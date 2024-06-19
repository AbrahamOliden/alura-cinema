import styles from "./Player.module.css";
import Banner from "../../components/Banner";
import Title from "../../components/Title";

function Player() {
  return (
    <div>
        <Banner img="player" color="#58B9AE" />
        <Title text="Player" />
    </div>
  );
};

export default Player;