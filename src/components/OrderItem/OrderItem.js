import { OrderItemStyled } from './OrderItem.styled';
import PropTypes from 'prop-types';

const OrderItem = ({ order }) => {
  const { orderId, name, email, address, products, sum } = order;

  const productNames = products.map(product => product.name);

  return (
    <OrderItemStyled>
      <h5>Order: {orderId}</h5>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
      <p>Products: {productNames.join(', ')}</p>
      <p>Total: ${sum}</p>
    </OrderItemStyled>
  );
};

OrderItem.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderItem;
