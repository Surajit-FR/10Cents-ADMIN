import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/auth/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ThemeCustomizer from './components/ThemeCustomizer';
import Index from './pages/Index';
import PublicRouteAccess from './routes/PublicRouteAccess';
import PrivateOne from './routes/private/PrivateOne';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '*',
    element: (
      <>
        <PrivateOne>
          <App />
        </PrivateOne>
        <ThemeCustomizer />
      </>
    ),
  },
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/login',
    element:
      (
        <PublicRouteAccess>
          <Login />
        </PublicRouteAccess>
      ),
  },
], {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
    <Toaster
      position='top-center'
      reverseOrder={false}
      gutter={10}
    />
  </Provider>
);

reportWebVitals();