import logo1 from './logoOK.png';
import logo2 from './logo X.png';

function Tareas(props){
    return(
      <li className="listaTareas">
        <p className={`tarea ${props.completed ? "tareasubrayada" : ""}`}>
          Tarea numero {props.text}
        </p>

        <img className={`tareaCompletada ${props.completed && "tareaCompletada-marcada"}`} src={logo1} alt="OK" 
          onClick={() => {
            console.log("Le diste click")
        }}
        />
        <img className={`eliminarTarea ${props.completed ? "" : "eliminarTarea-marcada"}`} src={logo2} alt="Borrar" 
          onClick={() => {
            console.log("Le diste click")
        }}
        />
        
      </li>
  
    )
  }

  export {Tareas};