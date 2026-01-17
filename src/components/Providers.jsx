'use client';

import { CartProvider } from '@/context/CartContext';

const Providers = ({ children }) => {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
};

export default Providers;
