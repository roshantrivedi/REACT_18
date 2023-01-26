import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import ErrorComponent from './components/ErrorComponent';
import BodyComponent from "../src/components/BodyComponent";
import AppLayout from './components/AppLayout';
import LoginComponent from './components/LoginComponent';
import LandingPage from './components/LandingPage';

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
        path:"/about-us",
        element:<Suspense fallback={<h2>Loading...</h2>}><AboutUs/></Suspense>,
      },
      { 
        path: "/login",
        element: <LoginComponent />
       },
       { 
        path: "login/landing-page",
        element: <LandingPage />
       },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);