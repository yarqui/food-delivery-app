import CartItem from 'components/CartItem/CartItem';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { submitOrderToServer } from 'utils/firebaseOperations';
const initialUserCredentials = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const CartScreen = ({ cartItems, setCartItems }) => {
  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );
  const navigate = useNavigate();

  const totalSum = cartItems.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0
  );

  const resetForm = () => {
    setUserCredentials(initialUserCredentials);
    setCartItems([]);
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    setUserCredentials(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

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

  const handleOrderSubmit = async e => {
    e.preventDefault();
    const { name, email, phone, address } = userCredentials;

    if (cartItems.length === 0) {
      alert('No items in the cart. Please choose something to eat.');
      navigate('/', { replace: true });
      return;
    }

    if (!name || !email || !phone || !address) {
      alert('All fields are required');
      return;
    }

    const order = {
      products: cartItems,
      sum: totalSum,
      name: name.trim(),
      email: email.trim().toLocaleLowerCase(),
      phone: phone.trim(),
      address: address.trim(),
    };

    console.log(order);
    await submitOrderToServer(order);

    resetForm();
    alert(
      'Thank you for your order. Please wait for our delivery guy in a jiffy'
    );
    navigate('/', { replace: true });
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
      <h3>Total: ${totalSum}</h3>

      <h3>Delivery Details:</h3>
      <form onSubmit={handleOrderSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Bruce Wayne, Tomas Shelby."
          placeholder="Name"
          value={userCredentials.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          // title="Please enter the valid email"
          placeholder="Email"
          value={userCredentials.email}
          onChange={handleInputChange}
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Phone"
          value={userCredentials.phone}
          onChange={handleInputChange}
        />
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          placeholder="Address"
          value={userCredentials.address}
          onChange={handleInputChange}
        />

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default CartScreen;
