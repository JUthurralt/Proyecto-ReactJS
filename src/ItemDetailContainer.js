import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { promesa } from "./components/helper/producto"
import ItemDetail from "./components/ItemDetail"


const ItemDetailContainer = () => {
    const [info, setInfo] = useState({})
    const {idDetalle} = useParams();
    useEffect(() => {

    if (idDetalle) {
        promesa
        .then(resp => setInfo(resp.find(prod => prod.id === idDetalle)))
    } else {
        promesa
        .then((resp) => setInfo(resp))
    }
        
    }, [idDetalle])
     
    
    return (
        <div>
            <ItemDetail info={info}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer;