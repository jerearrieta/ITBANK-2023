import React from "react";
import DerechaRegistro from './components/DerechaRegistro';
import IzquierdaRegistro from './components/IzquierdaRegistro';
import './registro.css';

export default function Registro() {
    return (
        <div className="conteiner">
            <IzquierdaRegistro />
            <DerechaRegistro />
        </div>
    );
}