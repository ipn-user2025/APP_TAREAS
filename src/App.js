import './App.css';
import { Tareas } from './Tareas';
import { ComponenteTitulo } from './ComponenteTitulo';
import { ComponenteBuscar } from './ComponenteBuscar';
import { ComponenteLista } from './ComponenteLista';

function App() {
  return (
    <div className="App">
      <ComponenteTitulo />
      <ComponenteBuscar />
      <ComponenteLista>
        <Tareas/>
        <Tareas/>
        <Tareas/>
        <Tareas/>
      </ComponenteLista>
    </div>
  );
}


export default App;
