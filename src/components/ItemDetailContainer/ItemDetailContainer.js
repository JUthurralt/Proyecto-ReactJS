import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { promesa } from "../helper/producto";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import Loader from "../ItemListContainer/Loader";


const ItemDetailContainer = () => {
    const [info, setInfo] = useState({})
    const [loading, setLoading] = useState(true)
    const {idDetalle} = useParams();
    useEffect(() => {

    if (idDetalle) {
        promesa
        .then(resp => setInfo(resp.find(prod => prod.id === idDetalle)))
        .finally(()=> setLoading(false))
    } else {
        promesa
        .then((resp) => setInfo(resp))
    }
        
    }, [idDetalle])
     
    
    return (
        <div>
            {loading ? 
            <Loader></Loader> :
            <ItemDetail info={info}></ItemDetail>}
        </div>
    )
}

export default ItemDetailContainer;