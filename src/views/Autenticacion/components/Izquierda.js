import styles from './Izquierda.module.css';

const Izquierda = () => {
  return (
    <div className={styles.izquierda}>
      <div className={styles.container_logo}>
        <img className={styles.logo} src="img/white-logo.png" alt="ITBA" />
      </div>
    </div>
  );
};

export default Izquierda;
