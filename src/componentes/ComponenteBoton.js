import "../estilos.css"
import logo3 from '../img/logo agregar.png';

function ComponenteBoton ({setOpenModal}){
    return (
        <button className ="boton"
            onClick={() => {
                setOpenModal(state=>!state)
                console.log("Le diste click")
            }}
        >
           <img  src={logo3} alt="OK" />
        </button>
    )
}

export {ComponenteBoton}