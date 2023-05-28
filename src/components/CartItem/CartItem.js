import { Item } from 'components/DishItem/DishItem.styled';
import { QuantityWrap } from 'screens/CartScreen/CartScreen.styled';

const CartItem = ({ dish, handleQuantityChange, handleRemoveFromCart }) => {
  const { dishId, photo, name, price, quantity } = dish;

  const onQuantityChange = e => {
    const quantity = parseInt(e.target.value, 10);
    handleQuantityChange(dishId, quantity);
  };

  return (
    <Item>
      <img src={photo} alt={name} width="200" />
      <p>{name}</p>
      <p>Price: ${price}</p>
      <QuantityWrap>
        <p>Quantity:</p>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={onQuantityChange}
        />
      </QuantityWrap>
      <button
        onClick={() => {
          handleRemoveFromCart(dishId);
        }}
      >
        Remove
      </button>
    </Item>
  );
};

export default CartItem;
