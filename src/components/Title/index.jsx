import styles from './Title.module.css';

import React from 'react'

function Title({ children }) {
  return (
    <div className={styles.title} >
        {children}
    </div>
  );
};

export default Title;