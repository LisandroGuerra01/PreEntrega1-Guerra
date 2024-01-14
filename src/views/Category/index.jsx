import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../Components/Firebase/config.js';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../Components/CardProduct/CardProduct";
import Spinner from 'react-bootstrap/Spinner';
import Header from './header.jsx';


const PageProductCategory = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        const getProductsFirebase = async () => {
            const productsCollection = collection(db, 'products');
            const q = query(productsCollection, where('category', '==', categoryId));
            const productsSnapshot = await getDocs(q);
            const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsList);
            setLoading(false);
        };
        getProductsFirebase();
    }, [categoryId]);

    if (loading) {
        return (
            <div className='d-flex justify-content-center detail mb-3'>
                <Spinner animation="border" variant="warning" />
            </div>
        );
    }

    return (
        <div className="container">
            <Header /><hr />
            <CardProduct products={products} />
        </div>
    )
}

export default PageProductCategory