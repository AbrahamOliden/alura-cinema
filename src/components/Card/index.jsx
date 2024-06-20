import { Link } from 'react-router-dom';
import { useFavoritesContext } from '../../context/Favorites';
import styles from './Card.module.css';
import favActive from "/img/favorite 1.png";
import favInactive from "/img/favorite_outline 1.png";

import React from 'react'

function Card({ id, capa: image, titulo: title }) {

  const { favorite, addFavorite } = useFavoritesContext();
  const isFavorite = favorite.some(fav => fav.id === id);
  const icon = isFavorite ? favActive : favInactive

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`} >
        <img src={image} alt={title} className={styles.image} />
        <h2 className={styles.title} >{title}</h2>
      </Link>
      <img
        src={icon}
        alt="favorite icon"
        className={styles.icon}
        onClick={() => addFavorite({ id, image, title })} />
    </div>
  );
};

export default Card;