import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Reservation from '@src/pages/Reservation';
import Notice from '@src/pages/Notice';

export default function Router() {
  return (
    <Routes>
      <Route path="" element={<Notice />} />
      <Route path="/reservation" element={<Reservation />} />
    </Routes>
  );
}
