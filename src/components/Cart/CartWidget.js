import "../Cart/CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { cartList } = useCartContext();

  return (
    <div className="estilo">
      <div>
        <FontAwesomeIcon icon={faShoppingCart} id="icono"></FontAwesomeIcon>
      </div>
      <div>
        <p className="p">{cartList.length}</p>
      </div>
    </div>
  );
};

export default CartWidget;
