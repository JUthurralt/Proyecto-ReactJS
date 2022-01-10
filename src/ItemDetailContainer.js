import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import { promesa } from "./components/helper/producto"
import ItemDetail from "./components/ItemDetail"


const ItemDetailContainer = () => {
    const [info, setInfo] = useState({})
    useEffect(() => {
        promesa
        .then(resp => setInfo(resp.find(prod => prod.id === '1')))
    }, [])
     
    console.log(info)
    return (
        <div>
            <ItemDetail info={info}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer;