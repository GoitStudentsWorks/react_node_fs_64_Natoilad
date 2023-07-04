import React, { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import AuthPage from 'pages/AuthPage';
// import WelcomePage from 'pages/WelcomePage';
// import HomePage from 'pages/Home';

import { PublicRoute } from 'components/Routs/PublicRoute';
import { PrivateRoute } from 'components/Routs/PrivateRoute';
import { useAuth } from 'hooks/authHooks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authRefresh } from 'redux/auth/auth-operations';
import { LoaderHomePage } from 'components/Loader/LoaderHomePage/Loader';
import ScreensPage from 'components/ScreensPage/ScreensPage';
import { Suspense } from 'react';
import { ModalProvider } from '../../contexts';

const WelcomePage = lazy(() => import('../../pages/WelcomePage'));

const AuthPage = lazy(() => import('../../pages/AuthPage'));

const HomePage = lazy(() => import('../../pages/Home'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authRefresh());
  }, [dispatch]);

  return isRefreshing ? (
    <LoaderHomePage />
  ) : (
    <ModalProvider>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Navigate to="welcome" />} />
          <Route path="/welcome" element={<WelcomePage />} />

          <Route
            path="/auth/:id"
            element={
              <PublicRoute redirectTo="/home" component={<AuthPage />} />
            }
          />

          <Route
            path="/home"
            element={
              <PrivateRoute redirectTo="/auth/login" component={<HomePage />} />
            }
          >
            <Route
              path="/home/:boardName"
              element={
                <PrivateRoute
                  redirectTo="/auth/login"
                  component={<ScreensPage />}
                />
              }
            />
          </Route>
          <Route path="*" element={<WelcomePage />} />
        </Routes>
      </Suspense>
    </ModalProvider>
  );
};
