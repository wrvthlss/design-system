// pages/_app.js
import React from 'react';
import { BrandProvider } from '../contexts/BrandContext'; // Ensure the path is correct relative to the location of _app.js
import '../app/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <BrandProvider>
      <Component {...pageProps} />
    </BrandProvider>
  );
}

export default MyApp;
