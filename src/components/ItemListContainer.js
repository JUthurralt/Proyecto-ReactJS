import "./ItemListContainer.css";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    return (
       <>
       <div id="items">
     <p id="Props"> {props.mensaje} </p>
     <ItemCount stock={3} initial={0}></ItemCount>
     <ItemList></ItemList>
     </div>
       </> 
    )
}

export default ItemListContainer;
