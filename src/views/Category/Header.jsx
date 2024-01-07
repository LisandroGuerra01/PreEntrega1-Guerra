import { useParams } from "react-router-dom";

const Header = () => {

    const { categoryId } = useParams();

    return (
        <div className="detail card-body">
            <h5 className="card-title"><span>{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</span></h5>
        </div>
    );
};

export default Header;