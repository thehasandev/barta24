import React from 'react'
import { createBrowserRouter } from 'react-router-dom';

import RoutesLayouts from '../components/RoutesLayouts';
import Home from '../pages/Home';
import Covid_19 from '../pages/Covid_19';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <RoutesLayouts />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/covid-19",
          element: <Covid_19 />,
        },
      ],
    },
  ]);

export default Routes