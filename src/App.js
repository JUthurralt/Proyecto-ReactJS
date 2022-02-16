// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../src/components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "../src/components/Context/CartContext";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar></NavBar>
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              exact
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route exact path="/categoria" element={<ItemListContainer />} />
            <Route
              exact
              path="/detalle/:idDetalle"
              element={<ItemDetailContainer />}
            />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
          <Footer></Footer>
        </div>
      </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
