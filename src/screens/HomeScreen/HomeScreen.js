import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  AsideWrap,
  DishesWrap,
  ContentWrap,
  TitlePrompt,
} from './HomeScreen.styled';
import { getAllShops } from 'utils/firebaseOperations';
import ShopItem from 'components/ShopItem/ShopItem';
import DishItem from 'components/DishItem/DishItem';
import 'react-toastify/dist/ReactToastify.css';

const initialShopsState = [];

const HomeScreen = ({ cartItems, setCartItems }) => {
  const [shops, setShops] = useState(initialShopsState);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    (async () => {
      const shops = await getAllShops();
      setShops(shops);
    })();
  }, []);

  const handleAddToCart = product => {
    const existingItem = cartItems.find(item => item.dishId === product.dishId);

    if (existingItem) {
      const updatedItems = cartItems.map(item => {
        if (item.dishId === product.dishId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      setCartItems(updatedItems);
      return;
    }

    const newCartItem = {
      ...product,
      quantity: 1,
    };

    setCartItems(prevState => [...prevState, newCartItem]);
    toast.success('Added to cart');
  };

  return (
    <>
      <TitlePrompt>
        <h2>Welcome to FetchFood Delivery 🍟</h2>
        <p>Choose a restaurant to deliver food from</p>
      </TitlePrompt>
      <ContentWrap>
        <AsideWrap>
          {shops &&
            shops.map(shop => (
              <ShopItem key={shop.shopId} shop={shop} setDishes={setDishes} />
            ))}
        </AsideWrap>

        <DishesWrap>
          {dishes &&
            dishes.map(dish => (
              <DishItem
                key={dish.dishId}
                dish={dish}
                handleAddToCart={handleAddToCart}
              />
            ))}
        </DishesWrap>
      </ContentWrap>
    </>
  );
};

HomeScreen.propTypes = {
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired,
};

export default HomeScreen;
