import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';
import RootLayout from './layouts/RootLayout.tsx';
import HomePage from './pages/homepage/HomePage.tsx';
import About from './pages/about/About.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/ELAIOS" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
