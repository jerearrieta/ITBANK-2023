import Convertidor from './contenido';

import './style.css';


export const metadata = {
    title: 'Convertidor de monedas',
    description: 'Homebanking online del banco Guardian Bank',
  }

const Page = () => {
  return (
    <div className='w-full'>
        <Convertidor />
    </div>
  )
}

export default Page

