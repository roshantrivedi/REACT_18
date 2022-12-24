import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './App';
import ErrorComponent from './components/ErrorComponent';
import BodyComponent from "../src/components/BodyComponent";
import AppLayout from './components/AppLayout';

const AboutUs = lazy(() => import('./components/AboutUs'));
const ProfileComponent = lazy(() => import('./components/ProfileComponent'));

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement: <ErrorComponent/>,
    children : [
      { 
        index: true,
        element: <BodyComponent />
       },
      {
        path:"/profile/:id",
        element:<Suspense fallback={<h2>Loading...</h2>}><ProfileComponent /></Suspense>,
      },
      {
        path:"about-us",
        element:<Suspense fallback={<h2>Loading...</h2>}><AboutUs/></Suspense>,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);