import React from 'react'
import './style.css';
import Calculadora from './calculadora';

export const metadata = {
    title: 'Calcular prestamos',
    description: 'Homebanking online del banco Guardian Bank',
  }

const page = () => {
  return (
    <div className='w-full'>
        <Calculadora />
    </div>
  )
}

export default page