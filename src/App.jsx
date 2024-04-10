// import 'vite/modulepreload-polyfill';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store.js';

import Home from './pages/Home';
import Login from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import BrowsePage from './pages/BrowsePage';
import PageNotFoundPage from './pages/PageNoutFoundPage';
import PrivateRoute from './components/PrivateRoute';
import WatchPage from './pages/WatchPage.jsx';

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <Home/>,
    },
    {
      path:'/login',
      element: <Login/>,
    },
    {
      path:'/signup',
      element: <SignUpPage/>
    },
    {
      path:'/browse',
      element: <PrivateRoute><BrowsePage/></PrivateRoute>,
    },
    {
      path:'/watch/:id',
      element: <PrivateRoute><WatchPage/></PrivateRoute>,
    },
    {
      path:'/*',
      element: <PageNotFoundPage/>
    }
  ]
);


function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App
