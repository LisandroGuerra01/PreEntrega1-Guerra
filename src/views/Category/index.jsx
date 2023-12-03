import data from "../../Components/Json/arrayProductos.json";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./category.css"

const { data: { items } } = data;
const PageCategory = () => {

    const { id } = useParams();

    const products = items.filter((item) => item.category === id);

    return (
        <>
            <Header imgPortada={"Hola"} />
            <div className="category">
                <h2 className="text-center m-5 fw-bold fs-1">{id.toUpperCase()}</h2>
                <div className="row">
                    {products.map((product) => {
                        return (
                            <div className="col-md-4" key={`product-${product.id}`} >
                                <div className="text-center item">
                                    <img src={product.img} alt={product.name}/>
                                    <h5 className="fs-2">{product.name}</h5>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default PageCategory;