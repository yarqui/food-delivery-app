const DishItem = ({ handleAddToCart, dish }) => {
  //   const { dishId, name, price, photo, quantity, shopId } = dish;
  return <div onClick={() => handleAddToCart(dish)}>{dish.name}</div>;
};

export default DishItem;
