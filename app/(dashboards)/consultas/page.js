import React from 'react'
import Validacion from './validacion';

export const metadata = {
  title: 'Atencion al cliente',
  description: 'Homebanking online del banco Guardian Bank',
}

const page = () => {
  return (
    <div className='mx-auto'><Validacion /></div>
  )
}

export default page