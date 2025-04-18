import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout() {
  return (
    <>
      <div className="flex flex-col min-h-dvh">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
