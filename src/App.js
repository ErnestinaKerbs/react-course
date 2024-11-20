import './App.css';
import Mensaje from './Mensaje';
import Contador from './Contador';



// un componente = declarar una funcion
// componente -> parte de la ui que es reutilizable en toda la app
//const App = () => {} es otra forma de declarar una funcion
function App() {

  const mensaje = "hello world from variable";
  return (

    //esto por mas que parezca html es jsx (javascript xml) se usa babel para compilar y ahi vemos que es js
    <div className="App">

      <Mensaje message="hola" color="purple"></Mensaje>
      <Mensaje message="Hola 2" color ="green"/>
     <p>{mensaje + " ahora estoy en jsx" }</p>
     <p>{ 2 + 2 + " <-- suma : date -->"+ new Date().toDateString()}</p>

     <h1>Ejemplo uso de hook para actualizar el estado</h1>
     <Contador/>
    </div>

  );
}



export default App;
