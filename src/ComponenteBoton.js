import "./estilos.css"
import logo3 from './logo agregar.png';

function ComponenteBoton (){
    return (
        <button className ="boton">
           <img  src={logo3} alt="OK" />
        </button>
    )
}

export {ComponenteBoton}