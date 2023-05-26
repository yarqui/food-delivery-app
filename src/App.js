import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import HomeScreen from 'screens/HomeScreen';
// import CartScreen from 'screens/CartScreen';
import { GlobalContainer } from './App.styled';
import NavBar from 'screens/NavBar/NavBar';

const HomeScreen = lazy(() => import('./screens/HomeScreen'));
const CartScreen = lazy(() => import('./screens/CartScreen'));
const NotFound = lazy(() => import('./screens/NotFound'));

const App = () => {
  return (
    <GlobalContainer>
      <NavBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<HomeScreen />}></Route>
          <Route path="/cart" element={<CartScreen />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </GlobalContainer>
  );
};

export default App;
