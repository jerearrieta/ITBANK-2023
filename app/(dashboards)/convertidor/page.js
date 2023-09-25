
import React from 'react'
import './style.css';
import Convertidor from './contenido';

export const metadata = {
    title: 'Convertidor de monedas',
    description: 'Homebanking online del banco Guardian Bank',
  }

const page = () => {
  return (
    <div className='w-full'>
        <Convertidor />
    </div>
  )
}

export default page

