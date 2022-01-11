import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { promesa } from "./helper/producto";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const {idCategoria} = useParams();
  useEffect(() => {
    if (idCategoria) {
      promesa
    .then((resp) => setInfo(resp.filter(prod => prod.marca === idCategoria)))
    .finally(() =>  setLoading(false))
    } else {
      promesa
    .then((resp) => setInfo(resp))
    .finally(() =>  setLoading(false))
    }
  }, [idCategoria]);

  return (
    <div>
      <ItemList state={loading} productos={info}></ItemList>
    </div>
  );
};

export default ItemListContainer;
