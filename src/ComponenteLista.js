import "./estilos.css"

function ComponenteLista(props){
    return(
        <ul class ="lista">
            {props.children}
        </ul>
    )
}

export {ComponenteLista}