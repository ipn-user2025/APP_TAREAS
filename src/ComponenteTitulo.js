import "./estilos.css"


function ComponenteTitulo(props){
    return(
      
        <h1 className= "titulo">
            Has completado {props.ntareas} de {props.totaltareas} tareas
        </h1>
    )
}

export{ComponenteTitulo}
