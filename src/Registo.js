import React from "react";
import './Registro.css';

const Registro = () =>{
    
    const saludoPorBoton = () => {
        alert('HOLA AMIGOS');
    };

    return(
        <React.Fragment>
    <div>
    {/*//EJEMPLO DE EVENTO 1 (RECOMENDADO)*/}
    <button className="Registro2" onClick={saludoPorBoton}> Registro_C </button  >
    {/*//EJEMPLO DE EVENTO 2*/}
    <button className="Registro" onClick={() => console.log('HOLA REGISTRO')}> Registro_C </button  >
    </div>
    </React.Fragment>
    );
}
export {Registro};