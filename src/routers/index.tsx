import { createBrowserRouter } from 'react-router-dom';
import React from 'react';

import App from '../App';
import Main from '@components/index';
import Error from '@/components/error/index';
import SearchBox from '@/components/search/searchBox';
import Population from '@components/bridge/census/population';
import ProgressBar from '@components/bridge';
// const main = React.lazy(() => import('../components/index'));

//FIXME: suspense 에러 발생
// const SearchBox = React.lazy(() => import('@/components/main/searchBox'));

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
