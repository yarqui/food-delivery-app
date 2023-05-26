import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from 'redux/cart/cartSlice';
import { chooseShop } from 'redux/shop/shopSlice';
import { selectShop } from 'redux/shop/shopSelectors';
import { AsideWrap, DishesWrap, MainWrap } from './HomeScreen.styled';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const shop = useSelector(selectShop);

  const handleShopChoice = shopId => {
    dispatch(chooseShop({ shopId }));
  };

  const handleAddToCart = product => {
    dispatch(addToCart({ product }));
  };

  return (
    <div>
      <h2>Welcome to FetchFood Delivery</h2>
      <p>Please, choose a restaurant to pick a dish</p>
      <MainWrap>
        <AsideWrap>
          <button onClick={() => handleShopChoice('DuckChoo')}>DuckChoo</button>
          <button onClick={() => handleShopChoice('SoloPizza')}>
            SoloPizza
          </button>
        </AsideWrap>

        {shop === 'DuckChoo' && (
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

        {shop === 'SoloPizza' && (
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
