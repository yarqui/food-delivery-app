import CartItem from 'components/CartItem/CartItem';
import React, { useState } from 'react';
import { submitOrderToServer } from 'utils/firebaseOperations';

// const initialUserCredentials = {
//   name: '',
//   email: '',
//   phone: '',
//   address: '',
// };

const CartScreen = ({ cartItems, setCartItems }) => {
  // const [userCredentials, setUserCredentials] = useState(
  //   initialUserCredentials
  // );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  // const { name, email, phone, address } = userCredentials;

  const handleRemoveFromCart = productId => {
    const updatedItems = cartItems.filter(dish => dish.dishId !== productId);
    setCartItems(updatedItems);
  };

  const handleQuantityChange = (productId, quantity) => {
    const updatedItems = cartItems.map(dish => {
      if (dish.dishId === productId) {
        return { ...dish, quantity };
      }

      return dish;
    });
    setCartItems(updatedItems);
  };

  const handleOrderSubmit = async () => {
    const order = {
      products: cartItems,
      name: name.trim(),
      email: email.trim().toLocaleLowerCase(),
      phone: phone.trim(),
      address: address.trim(),
    };

    console.log(order);
    await submitOrderToServer(order);

    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCartItems([]);
  };

  return (
    <div>
      <h3>Cart:</h3>
      {cartItems.map(dish => (
        <CartItem
          key={dish.dishId}
          dish={dish}
          handleQuantityChange={handleQuantityChange}
          handleRemoveFromCart={handleRemoveFromCart}
        ></CartItem>
      ))}

      <h3>Order Details:</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />

      <button onClick={handleOrderSubmit}>Submit Order</button>
    </div>
  );
};

export default CartScreen;
