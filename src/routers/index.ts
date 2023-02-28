import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Main from '../components/index';
// const main = React.lazy(() => import('../components/index'));

export const routes = createBrowserRouter([
  {
    path: '/',
    element: Main, // (대만 후 처리)
  },
]);
