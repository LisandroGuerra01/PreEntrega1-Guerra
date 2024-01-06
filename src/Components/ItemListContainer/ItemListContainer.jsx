/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const queryDb = getFirestore();
        const queryCollection = collection (db, "products");

        if(id){
            const queryFilter = query(queryCollection, where("category", "==", id));
            getDocs(queryFilter).then((res) =>
            setProducts(res.docs.map((p) => ({id: p.id, ...p.data() })))
            );
        } else {
            getDocs(queryCollection).then((res) =>
            setProducts(res.docs.map((p) => ({id: p.id, ...p.data() })))
            );
        }
    }, []);

    if (loading) {
        return <div className='d-flex justify-content-center m-5'><Spinner animation="border" variant="warning"/></div>;
    }


    return (
        <div className='container'>
            <h1>{greeting}</h1>
            <CardProduct products={products} />
        </div>
    );
};

export default ItemListContainer;