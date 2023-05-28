import CartItem from 'components/CartItem/CartItem';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { submitOrderToServer } from 'utils/firebaseOperations';
import localStorageNames from 'utils/localStorageNames';
import {
  loadFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from 'utils/localStorageOperations';
import {
  CartWrap,
  Form,
  DeliveryWrap,
  CartItemsWrap,
  TotalTitle,
} from './CartScreen.styled';

const initialUserCredentials = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const CartScreen = ({ cartItems, setCartItems }) => {
  const [userCredentials, setUserCredentials] = useState(
    () =>
      loadFromLocalStorage(localStorageNames.cartCredentials) ??
      initialUserCredentials
  );

  useEffect(() => {
    saveToLocalStorage(localStorageNames.cartCredentials, userCredentials);
  }, [userCredentials]);

  const navigate = useNavigate();

  const totalSum = cartItems.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0
  );

  const resetForm = () => {
    removeFromLocalStorage(localStorageNames.cartCredentials);
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
      toast.warning('No items in the cart. Please choose something to eat.', {
        autoClose: 2000,
      });
      navigate('/', { replace: true });
      return;
    }

    if (!name || !email || !phone || !address) {
      toast.warning('All fields are required', {
        autoClose: 1000,
      });
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

    await submitOrderToServer(order);

    toast.success(
      'Thank you for your order. Our delivery guy will be there in a jiffy 🚀',
      {
        autoClose: 3500,
        position: 'top-center',
      }
    );
    resetForm();
    navigate('/', { replace: true });
  };

  return (
    <CartWrap>
      <div>
        <h3>Delivery Details:</h3>
        <Form onSubmit={handleOrderSubmit}>
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
        </Form>
      </div>

      <CartItemsWrap>
        <TotalTitle>Total: ${totalSum}</TotalTitle>
        {cartItems.map(dish => (
          <CartItem
            key={dish.dishId}
            dish={dish}
            handleQuantityChange={handleQuantityChange}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </CartItemsWrap>
    </CartWrap>
  );
};

export default CartScreen;
