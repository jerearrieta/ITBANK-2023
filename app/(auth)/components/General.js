import Izquierda from './Izquierda';
import Derecha from './Derecha';


const General = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <Izquierda />
            <Derecha>
                {children}
            </Derecha>
        </div>
    );
}

export default General;
