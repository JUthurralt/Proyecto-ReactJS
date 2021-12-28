import "./ItemListContainer.css";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return (
       <>
       <div id="items">
     <p id="Props"> {props.mensaje} </p>
     <ItemCount stock={3} initial={0}></ItemCount>
     </div>
       </> 
    )
}

export default ItemListContainer;
