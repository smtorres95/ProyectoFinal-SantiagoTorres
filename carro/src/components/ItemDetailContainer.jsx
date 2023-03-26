import React from 'react'
import ItemDetail from "./itemdetail/ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

//Este componente muestra todos los productos disponibles
const ItemDetailContainer = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        const db = getFirestore();
        const prodsCollection = collection(db, "productos");
        getDocs(prodsCollection).then((querySnapshot) => {
            const prods = querySnapshot.docs.map((doc)=>({
                ...doc.data(),
                id: doc.id,
            }))
            setData(prods);
        });
    },[])


    return <>
    <ItemDetail prods={data} />
    </>    
}

export default ItemDetailContainer