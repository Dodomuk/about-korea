import { createBrowserRouter } from 'react-router-dom';
import React from 'react';

import App from '../App';
import Main from '@components/index';
import Error from '../components/error/index';
import SearchBox from '@components/main/searchBox';
// const main = React.lazy(() => import('../components/index'));

//FIXME: suspense 문제 발생
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
    }
]);
