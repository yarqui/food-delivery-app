// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectShop } from 'redux/shop/shopSelectors';
// import { selectCart } from 'redux/cart/cartSelectors';
// import { removeFromCart, updateCartQuantity } from 'redux/cart/cartSlice';

// const CartScreen = () => {
//   const dispatch = useDispatch();
//   const cart = useSelector(selectCart);
//   const shop = useSelector(selectShop);

//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');

//   const handleRemoveFromCart = productId => {
//     dispatch(removeFromCart({ productId }));
//   };

//   const handleQuantityChange = (productId, quantity) => {
//     dispatch(updateCartQuantity({ productId, quantity }));
//   };

//   const handleOrderSubmit = () => {
//     const order = {
//       shop,
//       products: cart,
//       email,
//       phone,
//       address,
//     };

//     console.log(order);
//     // TODO: Save the order to the Firebase database
//   };

//   return (
//     <div>
//       <h2>Shopping Cart Page</h2>
//       <h3>Cart:</h3>
//       {cart.map(product => (
//         <div key={product.id}>
//           <p>{product.name}</p>
//           <p>Price: ${product.price}</p>
//           <p>Quantity: {product.quantity}</p>
//           <button onClick={() => handleRemoveFromCart(product.id)}>
//             Remove
//           </button>
//           <input
//             type="number"
//             min="1"
//             value={product.quantity}
//             onChange={e => handleQuantityChange(product.id, e.target.value)}
//           />
//         </div>
//       ))}

//       <h3>Order Details:</h3>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Phone"
//         value={phone}
//         onChange={e => setPhone(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Address"
//         value={address}
//         onChange={e => setAddress(e.target.value)}
//       />

//       <button onClick={handleOrderSubmit}>Submit Order</button>
//     </div>
//   );
// };

// export default CartScreen;
