import './index.css'
import router from '../src/routes/AppRoutes'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { CartProvider } from './context/CartContext'


createRoot(document.getElementById('root')).render(

  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
