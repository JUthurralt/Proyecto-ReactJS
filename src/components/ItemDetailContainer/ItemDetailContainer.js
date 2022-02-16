import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import Loader from "../ItemListContainer/Loader";
import { getDoc, getFirestore, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const {idDetalle} = useParams();

    useEffect(() => {
        const db = getFirestore()
    
        const queryProd = doc(db, 'items', idDetalle)
        getDoc(queryProd)
        .then(resp => setInfo({ id: resp.id, ...resp.data()}))
        .finally(() => setLoading(false))     
    }, [idDetalle])
 

    return (
        <div className="container-itemDetailC">
            {loading ? 
            <Loader></Loader> :
            <div className="item-detail-c">
            <ItemDetail info={info}></ItemDetail>
            </div>}
        </div>
    )
}

export default ItemDetailContainer;