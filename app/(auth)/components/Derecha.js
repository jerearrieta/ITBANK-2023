import styles from './Derecha.module.css';

const Derecha = ({ children }) => {
  return (
    <div className={styles.derecha}>
      <div className={styles.container_form}>
        {children}
      </div>
    </div>
  );
};

export default Derecha;
