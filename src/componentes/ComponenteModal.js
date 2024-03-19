import React from 'react';
import "../estilos.css"
import ReactDOM from 'react-dom';

function ComponenteModal(){

    return ReactDOM.createPortal(
      <div className='componenteModal'>
        <h1> crear nuevas tareas </h1>
      </div>,
      document.getElementById("modal")
    )
    

}

export {ComponenteModal}