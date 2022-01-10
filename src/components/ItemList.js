import Item from "./Item";
import "./ItemList.css";
import Loader from "./Loader"

const ItemList = ({ productos, state  }) => {
  
  return (
    <div id="containerItems">
      {state ? 
        <Loader></Loader>
      :
      productos.map((item) => (
        <Item detalle={item} key={item.key}></Item>
        // <ItemDetailContainer item={item}></ItemDetailContainer>

      ))}
    </div>
  );
};

export default ItemList;
