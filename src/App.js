import React, { useState } from 'react';

import CartProvider from './store/CartProvider';
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
      <CartProvider>
        <Header onShowCart={showCartHandler} />
        <main>
            <Meals/>
        </main>
      </CartProvider>
  );
}

export default App;
