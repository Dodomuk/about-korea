import { createBrowserRouter } from 'react-router-dom';
import React from 'react';

import App from '../App';
import Error from '@components/error/index';
import ProgressBar from '@components/bridge';

const Population = React.lazy(() => import('@bridge/census/population'));
const HouseHold = React.lazy(() => import('@bridge/census/household'));
const HouseCount = React.lazy(() => import('@bridge/census/house_count'));

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />
    },
    {
        path: '/error',
        element: <Error />
    },
    {
        path: '/population',
        element: <Population />
    },
    {
        path: '/household',
        element: <HouseHold />
    },
    {
        path: '/houseCount',
        element: <HouseCount />
    },
    {
        path: '/progress',
        element: <ProgressBar />
    }
]);
