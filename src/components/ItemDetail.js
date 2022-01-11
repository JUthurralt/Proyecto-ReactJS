import "./ItemDetail.css";
import ItemCount from "./ItemCount"

const ItemDetail = ({ info }) => {
  return (
    <div className="itemDetail">
      <div className="contenedorImagen">
        <img src={info.img} className="imgDetail" alt={info.nombre}></img>
      </div>
      <div className="contenedorInfo">
        <div>
          <h3>
            Zapatillas {info.marca} {info.nombre}{" "}
          </h3>
        </div>
        <div>
            <p>$
              {info.precio} 
            </p>
        </div>
        <div>
            <h4>Talles </h4>
            <div className="talles">
            <p className="talle">36</p>
            <p className="talle">37</p>
            <p className="talle">38</p>
            <p className="talle">39</p>
            <p className="talle">40</p>
            <p className="talle">41</p>
            <p className="talle">42</p>
            <p className="talle">43</p>
            <p className="talle">44</p>
        </div>
        </div>
      </div>
      <ItemCount></ItemCount>
    </div>
  );
};

export default ItemDetail;
