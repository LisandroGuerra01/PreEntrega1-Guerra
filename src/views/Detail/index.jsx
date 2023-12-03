import { useParams } from "react-router-dom";
import data from '../../Components/Json/arrayProductos.json';
import ItemDetailContainer from "../../Components/ItemDetailContainer/ItemDetailContainer";

import Header from "../../views/Header/Header";


const { data: { items } } = data;

const PageProductDetail = () => {

    const { id } = useParams();

    const product = items.find((item) => item.id == id);
    return (
        <>
            <Header />
            <ItemDetailContainer product={product} />
        </>
    )
}

export default PageProductDetail