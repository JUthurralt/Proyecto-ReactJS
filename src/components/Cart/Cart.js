import { useCartContext } from "../Context/CartContext";
import "../Cart/Cart.css";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  documentId,
  getFirestore,
  writeBatch,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useState } from "react/cjs/react.development";
import Resumen from "../Resumen/Resumen";

const Cart = () => {
  const { cartList, vaciarCarrito, deleteItem, total } = useCartContext();
  const [condicional, setCondicional] = useState(false);
  const [dataForm, setDataForm] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const [idOrden, setIdOrden] = useState("");

  const realizarCompra = async (e) => {
    e.preventDefault();
    let orden = {};

    orden.buyer = dataForm;
    orden.total = total();
    orden.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.nombre;
      const precio = cartItem.precio * cartItem.cantidad;
      const cantidad = cartItem.cantidad;

      return { id, nombre, precio, cantidad };
    });
  
    const db = getFirestore();

    const ordenCollection = collection(db, "ordenes");
    await addDoc(ordenCollection, orden)
      .then((resp) => setIdOrden(resp.id))
      .catch((err) => console.log(err));

    const queryCollection = collection(db, "items");

    const queryActualizarStock = query(
      queryCollection,
      where(
        documentId(),
        "in",
        cartList.map((it) => it.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(queryActualizarStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cartList.find((item) => item.id === res.id).cantidad,
          })
        )
      )
      .catch((err) => console.log(err))
      .finally(() => console.log("Stock actualizado"));

    batch.commit();
    setCondicional(true);
  };

  function handleChange(e) {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.email]: e.target.value
    });
  }


  return (
    <div className="container-cart">
      {condicional ? (
        <p className="orden">Su número de orden es: <Resumen idOrden={idOrden}></Resumen>Muchas gracias por su compra, {dataForm.name}.</p>
      ) : (
        <>
          {cartList.length === 0 ? (
            <div className="sinProd">
              <h2>No agregaste ningún producto al carrito.</h2>
              <Link to="/">
                <button className="detail">Ir al catálogo.</button>
              </Link>
            </div>
          ) : (
            <>
            <div className="formularioTabla">
              <div className="tablaPadre">
            <table className="tabla">
                <tbody>
                  <tr>
                    <th>Producto</th>
                    <th>Marca</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Borrar</th>
                    <th>Total</th>
                  </tr>
                  {cartList.map((prod) => (
                    <tr key={prod.key}>
                      <td><img src={prod.img} className="imagen" alt={prod.nombre}></img></td>
                      <td>{prod.marca} </td>
                      <td>{prod.nombre} </td>
                      <td>{prod.cantidad} </td>
                      <td>$ {prod.precio} </td>
                      <td>
                        <button onClick={() => deleteItem(prod.id)}>X</button>
                      </td>
                      <td>$ {total()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={vaciarCarrito} className="vaciar">Vaciar carrito</button>
              </div>
              <div className="formulario">
                <p>Datos de contacto:</p>
              <input

                type="text"
                name="name"
                placeholder="Nombre y Apellido"
                onChange={handleChange}
                value={dataForm.name}
                required
              />
              <br />
              <input
                type="text"
                name="phone"
                placeholder="Telefono"
                onChange={handleChange}
                value={dataForm.phone}
                required
              />
              <br />
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={dataForm.email}
                required
              />
              <br />
              <button onClick={realizarCompra}>Finalizar compra</button>
              </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
