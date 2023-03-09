import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Main from '@components/index';
// const main = React.lazy(() => import('../components/index'));

import Error from '../components/error/index';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/error',
    element: <Error />,
  },
]);
