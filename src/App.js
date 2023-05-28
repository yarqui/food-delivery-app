import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalContainer } from './App.styled';
import NavBar from './components/NavBar';
import localStorageNames from 'utils/localStorageNames';
const HomeScreen = lazy(() => import('./screens/HomeScreen'));
const CartScreen = lazy(() => import('./screens/CartScreen'));
const NotFound = lazy(() => import('./screens/NotFound'));

const initialCartItems = [];

const App = () => {
  const [cartItems, setCartItems] = useState(
    () =>
      JSON.parse(localStorage.getItem(localStorageNames.cartItems)) ??
      initialCartItems
  );

  useEffect(() => {
    try {
      localStorage.setItem(
        localStorageNames.cartItems,
        JSON.stringify(cartItems)
      );
    } catch (error) {
      console.log('error:', error);
      console.log('error.message:', error.message);
    }
  }, [cartItems]);

  return (
    <GlobalContainer>
      <NavBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomeScreen cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route
            path="/cart"
            element={
              <CartScreen cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </GlobalContainer>
  );
};

export default App;
