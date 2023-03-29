import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <form onSubmit={alerta}>
        <p>
          Ingrese una frase: 
          <input type="text" name="Frase" />
        </p>
        <p>
          <input type="submit" value="Mostrar" />
        </p>
      </form>
    </div>
  );
}

function alerta(e){
  e.preventDefault();
  const oracion = (e.target.Frase.value);
  alert (oracion);
}

export default App;
