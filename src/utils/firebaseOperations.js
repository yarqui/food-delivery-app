import {
  query,
  where,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  getCountFromServer,
  // getCountFromServer,
} from 'firebase/firestore';

import { db } from '../firebase/config';

export const getAllShops = async () => {
  try {
    const allShops = [];
    const shopsRef = collection(db, 'shops');
    const shopsQuery = query(shopsRef);
    const shopsSnap = await getDocs(shopsQuery);

    shopsSnap.forEach(shop =>
      allShops.push({ ...shop.data(), shopId: shop.id })
    );
    return allShops;
  } catch (error) {
    console.log('error:', error);
    console.log('error.message:', error.message);
  }
};

export const getShopDishes = async shopId => {
  try {
    const dishes = [];
    const dishesRef = collection(db, 'dishes');
    const dishesQuery = query(dishesRef, where('shopId', '==', shopId));
    const dishesSnap = await getDocs(dishesQuery);

    dishesSnap.forEach(dish =>
      dishes.push({ ...dish.data(), dishId: dish.id })
    );

    return dishes;
  } catch (error) {
    console.log('error:', error);
    console.log('error.message:', error.message);
  }
};

export const getDishesCountByShopId = async shopId => {
  const dishesRef = collection(db, 'dishes');
  const dishesQuery = query(dishesRef, where('shopId', '==', shopId));
  const dishesCountSnap = await getCountFromServer(dishesQuery);
  const dishesCount = dishesCountSnap.data().count;

  return dishesCount;
};

export const submitOrderToServer = async order => {
  try {
    const orderRef = await addDoc(collection(db, 'orders'), { ...order });
    await updateDoc(orderRef, { orderId: orderRef.id });
  } catch (error) {
    console.log('error:', error);
    console.log('error.message:', error.message);
  }
};
