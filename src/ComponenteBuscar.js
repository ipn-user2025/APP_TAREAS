import React from 'react';
import "./estilos.css"

function ComponenteBuscar(){
    const[textoBuscador,settextoBuscador]= React.useState("")

    console.log(textoBuscador)

    return(
        <div className="buscador"> 
            <input 
                onChange={(event)=>{
                   settextoBuscador(event.target.value)
                }}
                 type="text" 
                 placeholder="Buscar tarea" 
            />
        </div>
    )
}

export {ComponenteBuscar}