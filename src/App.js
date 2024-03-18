import React from 'react';
import "./estilos.css"
import { Tareas } from './componentes/Tareas';
import { ComponenteTitulo } from './componentes/ComponenteTitulo';
import { ComponenteBuscar } from './componentes/ComponenteBuscar';
import { ComponenteLista } from './componentes/ComponenteLista';
import { ComponenteBoton } from './componentes/ComponenteBoton';
import {ComponenteTituloPrincipal} from './componentes/ComponenteTituloPrincipal';
import img1 from './img/img inicio.png';


// const tareasDefecto =[
//   {text :"Tarea 1", completed: false},
//   {text :"Tarea 2", completed: true},
//   {text :"Tarea 3", completed: false},
//   {text :"Tarea 4", completed: true}
// ]

// localStorage.setItem("tareas_v1", JSON.stringify(tareasDefecto))

function useLocalStorage (itemName, initialValue){
  
  const localStorageItem = localStorage.getItem(itemName) // inicializar datos en local storage convertiendo string a array
  let parsedItem 

  if(!localStorageItem){  // condicion para determinar si se tiene infomacion en el local storage
    localStorage.setItem(itemName, JSON.stringify(initialValue)) // si no se tiene info genera por defecto in array vacio
    parsedItem =initialValue
  }else{
    parsedItem = JSON.parse(localStorageItem) // si tiene info se utiliza PARSE para visualizarla en el navegador
  }

  const[item , setItem] = React.useState(parsedItem)

  const guardarItem =(newitem) =>{  // funcion para guardar cambios en el local Storage
    localStorage.setItem("tareas_v1", JSON.stringify(newitem)) // actualizar y guardar tareas en el LOCAL STORAGE
    setItem(newitem) // enviar tareas actuales
  }

  return [item, guardarItem]

}

function App() {

  const[contandorTareas,setcontandoTareas]= useLocalStorage("tareas_v1" , []) // contador tareas
  const[textoBuscador,settextoBuscador]= React.useState("") // lee estados-eventos, recibe lo escrito por el usuario

  const tareasCompletas = contandorTareas.filter(tarea => tarea.completed).length // contar numero de tareas existentes
  const buscarTareas = contandorTareas.filter(tarea=> tarea.text.toLowerCase().includes(textoBuscador.toLowerCase())) // filtrar tareas

  const completarTarea = (text) => {  // cambiar estados de completado al hacer clik en OK
    const nuevasTarea = [...contandorTareas] // crear copia del array de tareas
    const tareaid = nuevasTarea.findIndex(   // crear identificador ID
     (contandorTareas) => contandorTareas.text === text // comparar ID
    ) 
    nuevasTarea[tareaid].completed = true  // realizar cambio de estado
    setcontandoTareas(nuevasTarea)
  } 

  const borrarTarea = (text) => {  
    const nuevasTarea = [...contandorTareas] 
    const tareaid = nuevasTarea.findIndex(   
     (contandorTareas) => contandorTareas.text === text 
    ) 
    nuevasTarea.splice(tareaid,1)  // borrar tarea
    setcontandoTareas(nuevasTarea)
  } 

  return (
    <React.Fragment>
  <div className='body'>
      <div className="encabezado">
        <ComponenteTituloPrincipal/>
        <ComponenteTitulo 
          ntareas={tareasCompletas} 
          totaltareas={contandorTareas.length} 
        />
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
