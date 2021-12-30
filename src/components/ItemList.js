// import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import { promesa } from "./helper/producto";
import Item from "./Item"
import "./ItemList.css"

const ItemList = ()=> {
    const [info, setInfo ] = useState([])

    
  promesa 
  .then(resp => {
      setInfo(resp)
      console.log(info);
  })

   return(
       <div id="containerItems">
           {info.map(item =>
           <Item producto={item} key={item.key}></Item>
           )
           }
        </div>
   ) 
    
   
}

export default ItemList;