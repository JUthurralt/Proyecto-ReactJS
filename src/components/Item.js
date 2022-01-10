

const Item = ({detalle, isClicked}) => {
    return (
        <div id="itemEstilo" key={detalle.key}>
            <img src={detalle.img} className="imgItem"></img>
            <p className="marca"> {detalle.marca}</p>
            <p>{detalle.nombre}</p>
            <p className="precio">$
            {detalle.precio}</p>
            <p>{detalle.stock} disponibles</p>
            <button className="button">Comprar</button>
        </div>
    )
}
export default Item;