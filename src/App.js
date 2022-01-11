// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route exact path='/categoria' element={<ItemListContainer />} />
          <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
