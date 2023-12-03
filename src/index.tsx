import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { store } from './redux';
import { Provider } from 'react-redux';

import { MainLayout } from './Layouts/MainLayouts';
import { MoviesListPage } from './pages/';
import { MoviePage } from './pages/';
import { NotFoundPage } from './pages/';
import GenresPage from './pages/GenresPage/GenresPage';
import SearchPage from './pages/SearchPage/SearchPage';

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path={'/'} element={<MainLayout />}>
                    <Route index element={<Navigate to={'movies'} />} />
                    <Route path={'movies'} element={<MoviesListPage />} />
                    <Route path={'search'} element={<SearchPage />} />
                    <Route path={'movies/:genre'} element={<MoviesListPage />} />
                    <Route path={'genres'} element={<GenresPage />} />
                    <Route path={'movie/:id'} element={<MoviePage />} />
                    <Route path={'*'} element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Provider>
    </BrowserRouter>
);
