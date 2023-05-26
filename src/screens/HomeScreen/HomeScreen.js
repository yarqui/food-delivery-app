import React from 'react';

import { AsideWrap, DishesWrap, MainWrap } from './HomeScreen.styled';

const HomeScreen = ({
  selectedShop,
  setSelectedShop,
  cartItems,
  setCartItems,
}) => {
  const handleAddToCart = product => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      const updatedItems = cartItems.map(item => {
        if (item.id === product.id) {
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
      <p>Please, choose a restaurant to pick a dish</p>
      <MainWrap>
        <AsideWrap>
          <button onClick={() => setSelectedShop('DuckChoo')}>DuckChoo</button>
          <button onClick={() => setSelectedShop('SoloPizza')}>
            SoloPizza
          </button>
        </AsideWrap>

        {selectedShop === 'DuckChoo' && (
          <DishesWrap>
            <h3>DuckChoo</h3>
            <button
              onClick={() =>
                handleAddToCart({
                  id: 'product1',
                  name: 'Product 1',
                  price: 5,
                  quantity: 1,
                })
              }
            >
              Add Product 1 to Cart
            </button>
            <button
              onClick={() =>
                handleAddToCart({
                  id: 'product2',
                  name: 'Product 2',
                  price: 8,
                  quantity: 1,
                })
              }
            >
              Add Product 2 to Cart
            </button>
          </DishesWrap>
        )}

        {selectedShop === 'SoloPizza' && (
          <DishesWrap>
            <h3>SoloPizza</h3>
            <button
              onClick={() =>
                handleAddToCart({
                  id: 'product3',
                  name: 'Product 3',
                  price: 6,
                  quantity: 1,
                })
              }
            >
              Add Product 3 to Cart
            </button>
            <button
              onClick={() =>
                handleAddToCart({
                  id: 'product4',
                  name: 'Product 4',
                  price: 7,
                  quantity: 1,
                })
              }
            >
              Add Product 4 to Cart
            </button>
          </DishesWrap>
        )}
      </MainWrap>
    </div>
  );
};

export default HomeScreen;
