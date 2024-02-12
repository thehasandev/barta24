import React from 'react'
import { createBrowserRouter } from 'react-router-dom';

import RoutesLayouts from '../components/RoutesLayouts';
import Home from '../pages/Home';
import Covid_19 from '../pages/Covid_19';
import National from '../pages/National';
import International from '../pages/International';
import Politis from '../pages/Politis';
import Business from '../pages/Business';
import Error from '../pages/Error';

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
        {
          path: "/national",
          element: <National />,
        },
        {
          path: "/international",
          element: <International />,
        },
        {
          path: "/politis",
          element: <Politis />,
        },
        {
          path: "/business",
          element: <Business />,
        },
      ], 
    },
    {
      path : "/*",
      element:<Error/>
    }
  ]);

export default Routes