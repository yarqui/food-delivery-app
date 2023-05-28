const CartItem = ({ dish, handleQuantityChange, handleRemoveFromCart }) => {
  const { dishId, name, price, quantity } = dish;

  const onQuantityChange = e => {
    const quantity = parseInt(e.target.value, 10);
    handleQuantityChange(dishId, quantity);
  };

  return (
    <>
      <p>{name}</p>
      <p>Price: ${price}</p>
      <div>
        <p>Quantity:</p>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={onQuantityChange}
        />
      </div>
      <button
        onClick={() => {
          handleRemoveFromCart(dishId);
        }}
      >
        Remove
      </button>
    </>
  );
};

export default CartItem;
