import { Outlet } from 'react-router-dom';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
