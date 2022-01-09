import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { promesa } from "./helper/producto";

const ItemListContainer = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    promesa.then((resp) => {
      setInfo(resp);
    });
  }, []);

  return (
    <div>
      <ItemList productos={info}></ItemList>
    </div>
  );
};

export default ItemListContainer;
