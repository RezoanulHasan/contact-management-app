import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

import store from "./store/store";

import { Provider } from 'react-redux'


import Error from './Component/Shared/Error/Error';
import Home from './Component/Page/Home/Home';
import Show from './Component/Page/Chart and  map/Show';
import ContactList from './Component/Page/Home/Contact/ContactList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },

      {

        path: "mapAndChart",
        element:<Show></Show>,
      },

      {
        path: "Contact detail's",
        element:<ContactList></ContactList>,
      }, 

      
    
    ],
  },



]);

    
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<Provider store={store}>
   <QueryClientProvider client={queryClient}>

<RouterProvider router={router} />
</QueryClientProvider>

</Provider>

  </React.StrictMode>,
)
