import { useState, useEffect } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import data from '../../Components/Json/arrayProductos.json';
import Spinner from 'react-bootstrap/Spinner';

const { data: { items } } = data;

const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items);
        }, 1300);
    });
}
// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getItems().then((result) => {
            setProducts(result);
            setLoading(false);
            setError(false);
        });
    }, []);

    if (loading) {
        return <div className='d-flex justify-content-center mt-5'><Spinner animation="border" variant="warning"/></div>;
    }

    if (error) {
        return <h3>Hubo un error</h3>;
    }

    return (
        <div className="container">
            <h1>{greeting}</h1>
            <CardProduct products={products} />
        </div>
    );
};

export default ItemListContainer;