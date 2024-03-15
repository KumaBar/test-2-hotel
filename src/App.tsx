import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './utils/PrivateRoute';
import { NotFoundPage } from './pages/NotFoundPage';
import { Navigation } from './components/Navigation';
import { BookingPage } from './pages/BookingPage';
import { ProfilePage } from './pages/ProfilePage';
import { AuthorizationPage } from './pages/AuthorizationPage';
import { MainPage } from './pages/MainPage';
import { HotelPage } from './pages/HotelPage';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        {// <Route element={<PrivateRoute />}>

          //</Route>
        }
        <Route path="/" element={<MainPage />} />
        <Route path="/booking" element={< BookingPage />} />
        <Route path="/profile" element={< ProfilePage />} />
        <Route path="/login" element={<AuthorizationPage />} />
        <Route path="/:id" element={<HotelPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div >
  );
}

export default App;
