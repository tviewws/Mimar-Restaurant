import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MobileCallButton } from '../components/MobileCallButton';

export function Root() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#111111', position: 'relative' }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileCallButton />
    </div>
  );
}