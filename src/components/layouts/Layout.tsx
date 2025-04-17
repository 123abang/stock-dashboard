
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  withNavbar?: boolean;
  withFooter?: boolean;
}

const Layout = ({ 
  children, 
  withNavbar = true, 
  withFooter = true 
}: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {withNavbar && <Navbar />}
      <main className={`flex-grow ${withNavbar ? 'pt-16' : ''}`}>
        {children}
      </main>
      {withFooter && <Footer />}
    </div>
  );
};

export default Layout;
