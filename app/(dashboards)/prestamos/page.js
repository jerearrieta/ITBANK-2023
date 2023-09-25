import FormularioPrestamos from './components/PrestamosForm';
import './style.css';

export const metadata = {
    title: 'Prestamos',
    description: 'Homebanking online del banco Guardian Bank',
  }

export default function Prestamos() {
    return (
        <FormularioPrestamos title="Solicitar prestamos"></FormularioPrestamos>
    );
}