// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';


function App() {
  return (
   <div className='App'>
   <NavBar></NavBar>
   <ItemListContainer mensaje="En esta seccion se veran los productos"></ItemListContainer>
   <ItemDetailContainer></ItemDetailContainer>
   </div>
  );
}

export default App;
