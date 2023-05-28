import { useState } from 'react';
import OrderItem from 'components/OrderItem/OrderItem';
import { getOrdersByOrderEmail } from 'utils/firebaseOperations';

const initialOrders = [];

const HistoryScreen = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [input, setInput] = useState('');

  const handleInputChange = e => {
    let sanitizedEmail = e.target.value.trim().toLocaleLowerCase();
    setInput(sanitizedEmail);
  };

  const handleSubmit = async () => {
    const ordersByEmail = await getOrdersByOrderEmail(input);
    setInput('');
    setOrders(ordersByEmail);
  };
  return (
    <div>
      <p>Search your orders by email</p>
      <input type="text" value={input} onChange={handleInputChange}></input>
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
      <ul>
        {orders &&
          orders.map(order => <OrderItem key={order.orderId} order={order} />)}
      </ul>
    </div>
  );
};

export default HistoryScreen;
