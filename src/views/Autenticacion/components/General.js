import Izquierda from './Izquierda';
import Derecha from './Derecha';

import styles from './General.module.css';


const General = ({ children }) => {
    return (
        <div className={styles.container}>
            <Izquierda />
            <Derecha>
                {children}
            </Derecha>
        </div>
    );
}

export default General;
