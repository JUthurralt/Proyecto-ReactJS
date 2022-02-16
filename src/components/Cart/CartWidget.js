import "../Cart/CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { contador } = useCartContext();
  
  return (
    <div className="estilo">
        <FontAwesomeIcon icon={faShoppingCart} id="icono">
        </FontAwesomeIcon>  
        <p className="p-cont">{contador}</p>
    </div>
  );
};

export default CartWidget;
