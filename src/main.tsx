import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './index.css';
import { routes } from './routers';
import { ThemeProvider } from '@material-tailwind/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
    <ThemeProvider>
        <RecoilRoot>
            <RouterProvider router={routes} />
        </RecoilRoot>
    </ThemeProvider>
    // </React.StrictMode>,
);
