import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
// const HomeScreen = lazy(() => import('./screens/HomeScreen'));
// const CartScreen = lazy(() => import('./screens/CartScreen'));

const App = () => {
  return (
    // <Routes>
    //   <Route exact path="/" element={HomeScreen}></Route>
    //   <Route path="/cart" element={CartScreen}></Route>
    // </Routes>
    <HomeScreen />
  );
};

export default App;
