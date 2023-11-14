import {AiOutlineShoppingCart} from 'react-icons/ai';
import Badge from 'react-bootstrap/Badge';


// eslint-disable-next-line react/prop-types
const CartWidget = ({items}) => {
    return (
        <div>
            <i className='fs-2'><AiOutlineShoppingCart /></i>
            <span>
                <Badge pill bg="success">
                    {items}
                </Badge>
            </span>
        </div>
    );
};

export default CartWidget;