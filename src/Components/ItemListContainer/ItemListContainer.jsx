/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import { getProducts } from '../../data/asyncMock';
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const asyncFuction = async () => {
            try {
                const result = await getProducts();
                setProducts(result);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        asyncFuction();
    }, []);

    if (loading) {
        return <div className='d-flex justify-content-center m-5'><Spinner animation="border" variant="warning"/></div>;
    }

    if (error) {
        return <h3>Hubo un error</h3>;
    }

    return (
        <div className='container'>
            <h1>{greeting}</h1>
            <CardProduct products={products} />
        </div>
    );
};

export default ItemListContainer;