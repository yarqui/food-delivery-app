import { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalContainer } from './App.styled';
import NavBar from 'screens/NavBar/NavBar';

const HomeScreen = lazy(() => import('./screens/HomeScreen'));
const CartScreen = lazy(() => import('./screens/CartScreen'));
const NotFound = lazy(() => import('./screens/NotFound'));

const initialShop = '';
const initialCartItems = [];

const App = () => {
  const [selectedShop, setSelectedShop] = useState(initialShop);
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
              <HomeScreen
                selectedShop={selectedShop}
                setSelectedShop={setSelectedShop}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <CartScreen
                selectedShop={selectedShop}
                setSelectedShop={setSelectedShop}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </GlobalContainer>
  );
};

export default App;
