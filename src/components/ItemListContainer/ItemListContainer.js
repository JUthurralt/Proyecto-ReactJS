import "../ItemListContainer/ItemListContainer.css";
import ItemList from "../ItemListContainer/ItemList";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'



const ItemListContainer = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const {idCategoria} = useParams();
  
  
  useEffect(() => {
if (idCategoria) {
  const db = getFirestore()
    

  const queryCollection = query(collection(db, 'items'), where('marca', '==', idCategoria))
  getDocs(queryCollection)
  .then(res => setInfo( res.docs.map(prod => ({id: prod.id, ...prod.data()})) ))
  .finally(() => setLoading(false))
} else {
  const db = getFirestore()
    

  const queryCollection = query(collection(db, 'items'))
  getDocs(queryCollection)
  .then(res => setInfo( res.docs.map(prod => ({id: prod.id, ...prod.data()})) ))
  .finally(() => setLoading(false))
}
   
    
    // if (idCategoria) {
    //   promesa
    // .then((resp) => setInfo(resp.filter(prod => prod.marca === idCategoria)))
    // .finally(() =>  setLoading(false))
    // } else {
    //   promesa
    // .then((resp) => setInfo(resp))
    // .finally(() =>  setLoading(false))
    // }
  }, [idCategoria]);

 
  return (
    <div>
      <ItemList state={loading} productos={info}></ItemList>
    </div>
  );
};

export default ItemListContainer;
