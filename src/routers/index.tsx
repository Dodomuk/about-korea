import { createBrowserRouter } from 'react-router-dom';
import React from 'react';

import App from '../App';
import Error from '@components/error/index';
import ProgressBar from '@components/bridge';

// 인구통계
const Population = React.lazy(() => import('@bridge/census/population'));
// 가구통계
const HouseHold = React.lazy(() => import('@bridge/census/household'));
// 주택통계
const HouseCount = React.lazy(() => import('@bridge/census/house_count'));
// 사업체통계
const Company = React.lazy(() => import('@bridge/census/company'));
// 농가통계
const FarmHouse = React.lazy(() => import('@bridge/census/farm_house_hold'));
// 임가통계
const ForestryHouse = React.lazy(() => import('@bridge/census/forestry_house_hold'));
// 어가통계
const FisheryHouse = React.lazy(() => import('@bridge/census/fishery_house_hold'));
// 가구원 통계
const HouseHoldMember = React.lazy(() => import('@bridge/census/house_hold_member'));

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
        path: '/company',
        element: <Company />
    },
    {
        path: '/farmHouse',
        element: <FarmHouse />
    },
    {
        path: '/forestryHouse',
        element: <ForestryHouse />
    },
    {
        path: '/fisheryHouse',
        element: <FisheryHouse />
    },
    {
        path: '/houseHoldMember',
        element: <HouseHoldMember />
    },
    {
        path: '/progress',
        element: <ProgressBar />
    }
]);
