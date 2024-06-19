import styles from './Card.module.css';

import React from 'react'

function Card({id, capa: image, title}) {
  return (
    <div className={styles.container}>
        <img src={image} alt={title} className={styles.image} />
        <h2>{title}</h2>
        <img src="img/favorite 1.png" alt="favorite icon" />
    </div>
  );
};

export default Card;