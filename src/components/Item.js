
const Item = ({producto}) => {
    return (
        <div id="itemEstilo" key={producto.key}>
            <h2 >Nombre: {producto.nombre}</h2>
            <p>Precio: {producto.precio}</p>
            <p>Id: {producto.id}</p>
            <button>Comprar</button>
        </div>
    )
}
export default Item;