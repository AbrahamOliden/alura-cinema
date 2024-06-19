import styles from './Banner.module.css';

function Banner({ img, color }) {

  return (
    <div role='none' 
        className={styles.container}
        style={{background: `url(img/banner-${img}.png)`}} >
        <div role='image'
            className={styles.gradient}
            style={{background: `${color}`}}>
        </div>
    </div>
  );
};

export default Banner;