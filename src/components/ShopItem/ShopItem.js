import { getShopDishes } from 'utils/firebaseOperations';

const ShopItem = ({ shop, setDishes }) => {
  const { shopId, name } = shop;

  const handleShopSelect = async () => {
    const fetchedDishes = await getShopDishes(shopId);
    setDishes(fetchedDishes);
  };

  return <button onClick={handleShopSelect}>{name}</button>;
};

export default ShopItem;
