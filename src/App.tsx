import { Route, Routes, useLocation } from 'react-router-dom';
import IndexPage from '@/pages/index';
import PrivacyPolicyPage from '@/pages/privacy-policy';

function App() {
  const location = useLocation()

  return (
    <Routes>
      {
        // show landing page if hash does not contain a specific page
        !location.hash.includes('privacy-policy') &&
        <Route element={<IndexPage />} path='/' />
      }
      {
        // show privacy policy page if hash contains privacy policy
        location.hash.includes('privacy-policy') &&
        <Route element={<PrivacyPolicyPage />} path='/' />
      }
    </Routes>
  );
}

export default App;
