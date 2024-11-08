import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/auth/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ThemeCustomizer from './components/ThemeCustomizer';
import Index from './pages/Index';

const router = createBrowserRouter([
  {
    path: '*',
    element: (
      <>
        <App />
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
    element: <Login />,
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
  <RouterProvider router={router} future={{ v7_startTransition: true }} />
);

reportWebVitals();