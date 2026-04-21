import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import UserPage from '@/pages/UserPage';
import TagEntry from '@/pages/TagEntry';
import NotFound from '@/pages/NotFound';
import Register from '@/pages/Register';

import { routePaths } from '@/app/router/routePaths';

export default function Router() {
  return (
    <Routes>
      <Route path={routePaths.home} element={<Home />} />
      <Route path={routePaths.tag} element={<TagEntry />} />
      <Route path={routePaths.register} element={<Register />} />
      <Route path={routePaths.user} element={<UserPage />} />
      <Route path={routePaths.notFound} element={<NotFound />} />
    </Routes>
  );
}
