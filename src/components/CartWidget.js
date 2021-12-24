import "./CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
    return (
        <div>
        <FontAwesomeIcon icon={faShoppingCart} id="icono"></FontAwesomeIcon>
        </div>
    )
}

export default CartWidget;
