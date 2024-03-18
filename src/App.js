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
  {text :"Tarea 2", completed: true},
  {text :"Tarea 3", completed: false},
  {text :"Tarea 4", completed: true}
]

function App() {

  const[contandorTareas,setcontandoTareas]= React.useState(tareasDefecto) // contador tareas
  const[textoBuscador,settextoBuscador]= React.useState("") // lee estados-eventos, recibe lo escrito por el usuario

  const tareasCompletas = contandorTareas.filter(tarea => tarea.completed).length // contar numero de tareas existentes
  const buscarTareas = contandorTareas.filter(tarea=> tarea.text.toLowerCase().includes(textoBuscador.toLowerCase())) // filtrar tareas
  
  const completarTarea = (text) => {  // cambiar estados de completado al hacer clik en OK
    const nuevasTarea = [...contandorTareas] // crear copia del array de tareas
    const tareaid = nuevasTarea.findIndex(   // crear identificador ID
     (contandorTareas) => contandorTareas.text == text // comparar ID
    ) 
    nuevasTarea[tareaid].completed = true  // realizar cambio de estado
    setcontandoTareas(nuevasTarea)
  } 

  const borrarTarea = (text) => {  
    const nuevasTarea = [...contandorTareas] 
    const tareaid = nuevasTarea.findIndex(   
     (contandorTareas) => contandorTareas.text == text 
    ) 
    nuevasTarea.splice(tareaid,1)  // borrar tarea
    setcontandoTareas(nuevasTarea)
  } 

  return (
    <React.Fragment>
  <div className='body'>
      <div className="encabezado">
        <ComponenteTituloPrincipal/>
        <ComponenteTitulo ntareas={tareasCompletas} totaltareas={contandorTareas.length} />
      </div>
      <ComponenteBuscar 
        textoBuscador={textoBuscador}
        settextoBuscador={settextoBuscador}
      
      />
    <div className ="container"> 
        <ComponenteLista>
          {buscarTareas.map(todo=>(
            <Tareas
              key ={todo.text}
              text ={todo.text}
              completed ={todo.completed}
              onComplete ={() => completarTarea(todo.text)}
              delateTarea ={() => borrarTarea(todo.text)}
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
