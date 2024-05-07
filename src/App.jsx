import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { GlobalStyle } from './GlobalStyles'
import { AppLayout } from './components/AppLayout/AppLayout'


export const App = () => {
  const HomePage = lazy(() => import('./pages/Home/HomePage.jsx'));
  const FavoritesPage = lazy(() => import('./pages/Favorites.jsx'));
  const CatalogPage = lazy(() => import('./pages/Catalog/Catalog.jsx'));
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
          <Route path="/catalog" element={<AppLayout />}>
            <Route index element={<CatalogPage />} />
          </Route>
        </Routes>
      </Suspense>

      <GlobalStyle />

    </>
  );
};