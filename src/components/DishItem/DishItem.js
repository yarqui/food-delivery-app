import { Item } from './DishItem.styled';

const DishItem = ({ handleAddToCart, dish }) => {
  const { name, price, photo } = dish;

  return (
    <Item>
      <img src={photo} alt={name} width="200" />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button type="button" onClick={() => handleAddToCart(dish)}>
        Add to cart
      </button>
    </Item>
  );
};

export default DishItem;
