'use client';

import { CartProvider } from '@/context/CartContext';
import { LocaleProvider } from '@/i18n/LocaleProvider';

const Providers = ({ children }) => {
  return (
    <LocaleProvider>
      <CartProvider>{children}</CartProvider>
    </LocaleProvider>
  );
};

export default Providers;
