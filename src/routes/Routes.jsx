import React from 'react'
import { createBrowserRouter } from 'react-router-dom';

import RoutesLayouts from '../components/RoutesLayouts';
import Home from '../pages/Home';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <RoutesLayouts />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

export default Routes