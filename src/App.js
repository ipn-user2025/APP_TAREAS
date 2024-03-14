import './App.css';
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
    <div className="App">
      <ComponenteTitulo ntareas={3} totaltareas={5} />
      <ComponenteBuscar />
      <ComponenteLista>
        {tareasDefecto.map(todo=>(
          <Tareas
           key ={todo.text}
           text ={todo.text}
           completed ={todo.completed}
         />
        ))}
       
      </ComponenteLista>

      <ComponenteBoton />

    </div>
  );
}


export default App;
