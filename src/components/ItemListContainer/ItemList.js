import Item from "../ItemListContainer/Item";
import "../ItemListContainer/ItemList.css";
import Loader from "../ItemListContainer/Loader";

const ItemList = ({ productos, state  }) => {
  
  console.log(productos)
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
