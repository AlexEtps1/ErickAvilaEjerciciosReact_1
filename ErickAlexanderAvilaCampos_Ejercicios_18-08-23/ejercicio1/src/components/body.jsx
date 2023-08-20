import React from "react";
import '../components/body.css';
import Arriba from './img/flechaup.png';
import Abajo from './img/flechadown.png';

const body = (props) => {
    return (
        <div className="contenedor-cuerpo">
            <div className="contador">
                <p className="numero">{props.Contar}</p>
            </div>
            <div className="botones">
                <button onClick={props.Subir}>
                    <img src={Arriba}/>
                </button>
                <button onClick={props.Bajar}>
                    <img src={Abajo}/>
                </button>
            </div>
        </div>
    )
}

export default body;