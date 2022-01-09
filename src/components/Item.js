
const Item = ({detalle}) => {
    return (
        <div id="itemEstilo" key={detalle.key}>
            <h2 >Nombre: {detalle.nombre}</h2>
            <p>Precio: {detalle.precio}</p>
            <p>Id: {detalle.id}</p>
            <p>Stock: {detalle.stock}</p>
            <button>Comprar</button>
        </div>
    )
}
export default Item;