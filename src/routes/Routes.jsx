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
import SportsBarta from '../pages/SportsBarta';
import Entertentment from '../pages/Entertentment';
import Teach from '../pages/Teach';

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
        {
          path: "/sports",
          element: <SportsBarta />,
        },
        {
          path: "/entertentment",
          element: <Entertentment />,
        },
        {
          path: "/teach",
          element: <Teach />,
        },
        {
          path: "/lifestyle",
          element: <Entertentment />,
        }
      ], 
    },
    {
      path : "/*",
      element:<Error/>
    }
  ]);

export default Routes