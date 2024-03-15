import React from 'react';
import "./estilos.css"
import { Tareas } from './Tareas';
import { ComponenteTitulo } from './ComponenteTitulo';
import { ComponenteBuscar } from './ComponenteBuscar';
import { ComponenteLista } from './ComponenteLista';
import { ComponenteBoton } from './ComponenteBoton';
import {ComponenteTituloPrincipal} from './ComponenteTituloPrincipal';
import img1 from './img inicio.png';


const tareasDefecto =[
  {text :"Tarea 1", completed: false},
  {text :"Tarea 2", completed: false},
  {text :"Tarea 3", completed: false},
  {text :"Tarea 4", completed: true}
]

function App() {
  return (
    <React.Fragment>
  <div className='body'>
      <div className="encabezado">
        <ComponenteTituloPrincipal/>
        <ComponenteTitulo ntareas={3} totaltareas={5} />
      </div>
      <ComponenteBuscar />
    <div className ="container"> 
        <ComponenteLista>
          {tareasDefecto.map(todo=>(
            <Tareas
              key ={todo.text}
              text ={todo.text}
              completed ={todo.completed}
             />
        ))}
       
        </ComponenteLista>
        <div className="container2">
        <img className="imginicio" src={img1} alt="imagen" />
        <ComponenteBoton />
         </div>
      </div>
      </div>
      </React.Fragment>
  );
}


export default App;
