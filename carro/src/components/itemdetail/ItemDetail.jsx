import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import './itemdetail.css'
import ItemCount from "../ItemCount";
import { Link } from 'react-router-dom';

//En este componente se detalla el item seleccionado
const ItemDetail = ({ prods }) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(()=>{
    const db = getFirestore();

    const prodRef = doc(db, "productos", "IGDksdve3ezhIiEysQOs");

    getDoc(prodRef).then((snapshot) => {
      if (snapshot.exists()){
        setProduct(snapshot.data());
      } else {
        console.log("No data!")
      }
    })
  }, []);

  const prodFilter = prods.filter((prod)=> prod.id == id)

  return (
    <>
      <div className='card-detail-container'>
      {prodFilter.map((prod) => (
        <div className="card-detail" key={prod.id}>
            <img src={prod.image} alt="Imagen de producto" />
          <div className="card-body">
            <h4 className="card-title">{prod.name}</h4>
            <p className="card-text">DESCRIPCIÓN: {prod.description}</p>
            <p className="card-text">CATEGORÍA: {prod.category}</p>
            <p className="card-text">STOCK: {prod.stock}</p>
            <p className="card-text">PRECIO: $ {prod.price}</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary"><Link to="/menu">Volver al menu</Link></button>
            <button class="btn btn-secondary">
              <ItemCount
               stock={prod.stock}
               id={prod.id}
               price={prod.price}
               name={prod.name} />
            </button>
        </div>
      </div>
      ))}
    </div>
    </>
  );
};

export default ItemDetail;
