import Header from "../Header/Header";
import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";

const Home = () => {
    return (
        <div>
            <Header />
            <ItemListContainer greeting={<div className="text-center m-5 fw-bold">Freddo Helados</div>} />
        </div>
    )
}

export default Home