import { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalContainer } from './App.styled';
import NavBar from './components/NavBar';

const HomeScreen = lazy(() => import('./screens/HomeScreen'));
const CartScreen = lazy(() => import('./screens/CartScreen'));
const NotFound = lazy(() => import('./screens/NotFound'));

const initialCartItems = [];

const App = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

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
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </GlobalContainer>
  );
};

export default App;
