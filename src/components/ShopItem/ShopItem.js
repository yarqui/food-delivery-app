import { useEffect, useState } from 'react';
import {
  getDishesCountByShopId,
  getShopDishes,
} from 'utils/firebaseOperations';

const ShopItem = ({ shop, setDishes }) => {
  const [count, setCount] = useState(0);
  const { shopId, name } = shop;

  useEffect(() => {
    (async () => {
      const dishesCount = await getDishesCountByShopId(shopId);
      setCount(dishesCount);
    })();
  }, []);

  const handleShopSelect = async () => {
    const dishes = await getShopDishes(shopId);
    setDishes(dishes);
  };

  return (
    <div>
      <p>
        {count} {count !== 1 ? 'Dishes' : 'Dish'}
      </p>
      <button onClick={handleShopSelect}>{name}</button>
    </div>
  );
};

export default ShopItem;
