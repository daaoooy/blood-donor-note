import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from '@/pages/Home';
import UserPage from '@/pages/UserPage';
import TagEntry from '@/pages/TagEntry';
import NotFound from '@/pages/NotFound';
import Register from '@/pages/Register';
import DonationHistory from '@/pages/DonationHistory';
import Setting from '@/pages/Setting';
import Map from '@/pages/Map';
import AddDonation from '@/pages/AddDonation';
import Quiz from '@/pages/Quiz';

import { routePaths } from '@/app/router/routePaths';
import AnimatedLayout from '@/app/layout/AnimatedLayout';

export default function Router() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<AnimatedLayout />}>
          <Route path={routePaths.home} element={<Home />} />
          <Route path={routePaths.tag} element={<TagEntry />} />
          <Route path={routePaths.register} element={<Register />} />
          <Route path={routePaths.user} element={<UserPage />} />
          <Route
            path={routePaths.donationHistory}
            element={<DonationHistory />}
          />
          <Route path={routePaths.notFound} element={<NotFound />} />
          <Route path={routePaths.setting} element={<Setting />} />
          <Route path={routePaths.map} element={<Map />} />
          <Route path={routePaths.quiz} element={<Quiz />} />
          <Route path={routePaths.addDonation} element={<AddDonation />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
