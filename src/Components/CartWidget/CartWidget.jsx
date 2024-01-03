import {AiOutlineShoppingCart} from 'react-icons/ai';
import Badge from 'react-bootstrap/Badge';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


// eslint-disable-next-line react/prop-types
const CartWidget = () => {

    const { getQuantity } = useContext(CartContext);

    return (
        <div>
            <i className='fs-2'><AiOutlineShoppingCart /></i>
            <span>
                <Badge pill bg="success">
                    {getQuantity()}
                </Badge>
            </span>
        </div>
    );
};

export default CartWidget;