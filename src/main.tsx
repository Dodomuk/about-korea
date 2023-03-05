import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './index.css';
import { routes } from './routers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <RecoilRoot>
    <RouterProvider router={routes} />
  </RecoilRoot>,
  // </React.StrictMode>,
);
