import FormularioPrestamos from './components/PrestamosForm';
import './style.css';


export const metadata = {
    title: 'Prestamos',
    description: 'Solicitador de prestamos de Guardian Bank',
}


export default function Prestamos() {
    return <FormularioPrestamos title="Solicitar prestamos"></FormularioPrestamos>;
    
}
