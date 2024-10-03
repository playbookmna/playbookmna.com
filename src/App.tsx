import { Route, Routes } from 'react-router-dom';

import IndexPage from '@/pages/index';
import PrivacyPolicyPage from '@/pages/privacy-policy';

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path='/' />
      <Route element={<PrivacyPolicyPage />} path='/privacy-policy' />
    </Routes>
  );
}

export default App;
