import React, { useEffect, useState } from 'react';

import { AsideWrap, DishesWrap, MainWrap } from './HomeScreen.styled';
import { getAllShops, getShopDishes } from 'utils/firebaseOperations';
import ShopItem from 'components/ShopItem/ShopItem';
import DishItem from 'components/DishItem/DishItem';
import shopsNames from 'utils/shopsNames';

const initialSelectedShop = {};
const initialShopsState = [];

const HomeScreen = ({ cartItems, setCartItems }) => {
  const [shops, setShops] = useState(initialShopsState);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      const shops = await getAllShops();
      setShops(shops);
    };
    fetchShops();
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
  };

  return (
    <div>
      <h2>Welcome to FetchFood Delivery</h2>
      <p>Please, choose a restaurant to pick a dish to deliver from</p>
      <MainWrap>
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
      </MainWrap>
    </div>
  );
};

export default HomeScreen;