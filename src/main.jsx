import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './App.css'
import Home from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Contactus.jsx';
import ProductDetails from './ProductDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Contactus",
    element: <Contact />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/product-details/:product_id",
    element: <ProductDetails />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

     <RouterProvider router={router} />
    
  </StrictMode>,
)
