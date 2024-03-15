import logo1 from './logoOK.png';
import logo2 from './logo X.png';

function Tareas(props){
    return(
      <li className="listaTareas">
        <p className="tarea">Tarea numero {props.text}</p>
        <img className="tareaCompletada" src={logo1} alt="OK" />
        <img className="eliminarTarea" src={logo2} alt="Borrar" />
        
      </li>
  
    )
  }

  export {Tareas};