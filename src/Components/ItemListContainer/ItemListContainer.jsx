/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import {collection, getDocs} from "firebase/firestore";
import {db} from "../Firebase/config.js"
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getProductsFirebase = async () => {
            const productsCollection = collection(db, "products");
            const productsSnapshot = await getDocs(productsCollection);
            const productsList = productsSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            setProducts(productsList);
            setLoading(false);
        };getProductsFirebase();
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