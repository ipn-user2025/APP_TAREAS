import "./estilos.css"

function ComponenteTitulo(props){
    return(
      
        <h1 id = "titulo">
            Has completado {props.ntareas} de {props.totaltareas} tareas
        </h1>
    )
}

export{ComponenteTitulo}