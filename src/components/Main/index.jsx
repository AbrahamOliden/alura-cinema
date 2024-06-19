import styles from "./Main.module.css";

import React from 'react'

function Main({ children }) {
  return (
    <main className={styles.main} >
        {children}
    </main>
  )
}

export default Main