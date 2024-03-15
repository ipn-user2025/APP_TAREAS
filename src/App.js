import React from 'react';
import "./estilos.css"
import { Tareas } from './Tareas';
import { ComponenteTitulo } from './ComponenteTitulo';
import { ComponenteBuscar } from './ComponenteBuscar';
import { ComponenteLista } from './ComponenteLista';
import { ComponenteBoton } from './ComponenteBoton';

const tareasDefecto =[
  {text :"Tarea 1", completed: true},
  {text :"Tarea 2", completed: true},
  {text :"Tarea 3", completed: true},
  {text :"Tarea 4", completed: true}
]

function App() {
  return (
    <React.Fragment>
      <ComponenteTitulo ntareas={3} totaltareas={5} />
      <ComponenteBuscar />
    <div class ="container"> 
        <ComponenteLista>
          {tareasDefecto.map(todo=>(
            <Tareas
              key ={todo.text}
              text ={todo.text}
              completed ={todo.completed}
             />
        ))}
       
        </ComponenteLista>
        <div id="container2">
          <img id="img inicio" src="" alt="imagen" />
          <ComponenteBoton />
         </div>
      </div>
      </React.Fragment>
  );
}


export default App;
