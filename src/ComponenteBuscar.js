
import "./estilos.css"

function ComponenteBuscar(){
    return(
        <div className="buscador"> 
            <input 
                onChange={(event)=>{
                    console.log(event.target.value)
                }}
                 type="text" 
                 placeholder="Buscar tarea" 
            />
        </div>
    )
}

export {ComponenteBuscar}