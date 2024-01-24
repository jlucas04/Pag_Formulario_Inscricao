import './App.css';
import Logo from "./componentes/logo"
import Textos from "./componentes/textos"
import Beneficios from './componentes/beneficios';
import Header from './componentes/header';
import FormularioInscricao from './componentes/formulario'
import Divisao from './componentes/divisao'

function App() {
  return (

    <div className="App">
      <Header></Header>
      <Divisao></Divisao>
      <FormularioInscricao></FormularioInscricao>
    </div>
  );
}

export default App;
