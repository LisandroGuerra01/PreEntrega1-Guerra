import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Components/Firebase/config.js';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../Components/ItemDetailContainer/ItemDetailContainer";
import Spinner from 'react-bootstrap/Spinner';



const PageProductDetail = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { productId } = useParams();

    useEffect(() => {
        const getProductFirebase = async () => {
            const productDoc = doc(db, "products", productId);
            const productSnapshot = await getDoc(productDoc);
            const productData = productSnapshot.data();
            setProduct({ id: productSnapshot.id, ...productData });
            setLoading(false);
        };
        getProductFirebase();
    }, [productId]);

    if (loading) {
        return (
            <div className='d-flex justify-content-center m-5'>
                <Spinner animation="border" variant="warning" />
            </div>
        );
    }


    return (
        <div className='container'>
            <ItemDetailContainer product={product} />
        </div>
    )
}

export default PageProductDetail