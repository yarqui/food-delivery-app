import { useEffect, useState } from 'react';
import {
  getDishesCountByShopId,
  getShopDishes,
} from 'utils/firebaseOperations';
import { Item, Text } from './ShopItem.styled';

const ShopItem = ({ shop, setDishes }) => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { shopId, name, photo } = shop;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const dishesCount = await getDishesCountByShopId(shopId);
      setCount(dishesCount);
      setIsLoading(false);
    })();
  }, [shopId]);

  const handleShopSelect = async () => {
    const dishes = await getShopDishes(shopId);
    setDishes(dishes);
  };

  return (
    <Item>
      {!isLoading && (
        <>
          <img src={photo} alt={name} width="150" onClick={handleShopSelect} />
          <h3>{name}</h3>
          <Text>
            ({count} {count !== 1 ? 'Dishes' : 'Dish'})
          </Text>
        </>
      )}
    </Item>
  );
};

export default ShopItem;
