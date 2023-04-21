import { createBrowserRouter } from 'react-router-dom';
import React from 'react';

import App from '../App';
import Error from '@components/error/index';
import ProgressBar from '@components/bridge';

const SearchBox = React.lazy(() => import('@components/search/search_box'));
const Population = React.lazy(() => import('@bridge/census/population'));
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
        path: '/searchBox',
        element: <SearchBox />
    },
    {
        path: '/population',
        element: <Population />
    },
    {
        path: '/progress',
        element: <ProgressBar />
    }
]);
