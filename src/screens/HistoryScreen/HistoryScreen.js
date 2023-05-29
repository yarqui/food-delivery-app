import { useEffect, useState, useRef } from 'react';
import OrderItem from 'components/OrderItem/OrderItem';
import { getOrdersByOrderEmail } from 'utils/firebaseOperations';
import { toast } from 'react-toastify';
import { Form, Input, Label } from './HistoryScreen.styled';

const initialOrders = [];

const HistoryScreen = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = e => {
    let sanitizedEmail = e.target.value.trim().toLocaleLowerCase();
    setInput(sanitizedEmail);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const ordersByEmail = await getOrdersByOrderEmail(input);

    if (ordersByEmail === null) {
      toast.error('There is no user with this email');
      return;
    }

    setOrders(ordersByEmail);
    setInput('');
  };
  return (
    <>
      <div>
        <Form>
          <Label>
            Search your orders by email
            <Input
              type="email"
              name="email"
              value={input}
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              placeholder="Email"
              ref={inputRef}
              onChange={handleInputChange}
            />
          </Label>
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </Form>
        <ul>
          {orders &&
            orders.map(order => (
              <OrderItem key={order.orderId} order={order} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default HistoryScreen;
