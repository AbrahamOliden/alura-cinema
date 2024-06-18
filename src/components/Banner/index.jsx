import styles from './Banner.module.css';

function Banner({ img, color }) {
  return (
    <img src={`img/banner-${img}.png`} alt="Background image" />
  );
};

export default Banner;