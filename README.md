# FetchFood Delivery App

To run this app on localhost, you should install
the required packages by running "npm i" in the terminal. Afterward, execute "npm start" to start the application.

To test the app, simply open the following link:
https://yarqui.github.io/food-delivery-app/

Technologies:
- React.js
- React Router
- Firebase storage
- Firestore database
- Local Storage for storing shopping cart data, including cart items and user credentials
- Styled Components
- React Toastify
- Prop Types

All images are stored in Firebase Storage, and data such as shops, dishes, and orders are stored in the Firebase Database.

Features:
- Routing between pages
- Routes are connected with lazy import
- Basic input fields validation
- Fetching from Firestore DB & rendering appropriate dishes from the Firestore DB based on the selected shop click
- A cart items counter that displays the number of items in the cart upon adding dishes
- A dish counter available for each shop, fetched from the database
- A dynamic item quantity adjustment in the shopping cart with a total sum calculation
- Ability to remove items from the cart
- Shopping cart items and user credentials are stored in the Local Storage
- After submitting an order, it is saved in the database, and the Local Storage is cleared
- History page that allows users to find orders by email used during checkout.
- React Toastify provides informative messages for various actions
- Prop Types are used to controll props
