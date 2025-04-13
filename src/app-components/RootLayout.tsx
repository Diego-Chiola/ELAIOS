import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="flex flex-col">
      <h1>RootLayout</h1>
      <Outlet />
    </div>
  );
}
