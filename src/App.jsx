import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { GlobalStyle } from './GlobalStyles'
import { AppLayout } from './components/AppLayout/AppLayout'


export const App = () => {
  const HomePage = lazy(() => import('./pages/Home/Home.jsx'));
  const FavoritesPage = lazy(() => import('./pages/Favorites.jsx'));

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/favorites" element={<AppLayout />}>
            <Route index element={<FavoritesPage />} />
          </Route>
        </Routes>
      </Suspense>

      <GlobalStyle />

    </>
  );
};