import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { promesa } from "./helper/producto";


const ItemListContainer = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    promesa
    .then((resp) => setInfo(resp))
    .finally(() =>  setLoading(false))

  }, []);

  return (
    <div>
      <ItemList state={loading} productos={info}></ItemList>
    </div>
  );
};

export default ItemListContainer;
