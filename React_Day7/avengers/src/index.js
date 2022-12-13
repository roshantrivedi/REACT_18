import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './App';
import AboutUs from './components/AboutUs';
import ErrorComponent from './components/ErrorComponent';
import ProfileComponent from './components/ProfileComponent';
import BodyComponent from "../src/components/BodyComponent";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <ErrorComponent/>,
    children : [
      { 
        index: true,
        element: <BodyComponent />
       },
      {
        path:"/profile/:id",
        element:<ProfileComponent />,
      },
      {
        path:"/all",
        element:<BodyComponent />,
      },
      {
        path:"about-us",
        element:<AboutUs/>,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);