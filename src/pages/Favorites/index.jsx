import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";
import styles from "./Favorites.module.css";

import React from 'react'

function Favorites() {
  return (
    <>
    <Banner img="favoritos" color="#00BF63" />
    <Title text="Favoritos"/>
    <Card 
      capa="https://i.ytimg.com/vi/cixof3jguHU/maxresdefault.jpg" 
      titulo="Tacos de sesos" />
    </>
  );
};

export default Favorites;