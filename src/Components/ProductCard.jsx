/* eslint-disable react/prop-types */

const ProductCard = ({img, title, price, children }) => {


    return (
        <div className="my-3 border rounded text-center">
            <h2>{title}</h2>
            <img src={img} alt={title} />
            <p>${price}</p>
            <div>{children}</div>
        </div>
    );
};

export default ProductCard;