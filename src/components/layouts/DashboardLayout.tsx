
import { ReactNode, useState, useEffect } from 'react';
import DashboardSidebar from './DashboardSidebar';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  
  useEffect(() => {
    // Close sidebar on mobile when navigation happens
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [currentPath, isMobile]);

  // Handle window resize
  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dashboard-bg">
      {isMobile && (
        <div className="p-4 bg-white dark:bg-dashboard-bg border-b dark:border-gray-800">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex lg:hidden"
          >
            <Menu size={20} />
          </Button>
        </div>
      )}
      
      <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      
      <div className={`transition-all duration-300 ${
        sidebarOpen && !isMobile ? 'ml-[250px]' : 'ml-0'
      } p-4 sm:p-6`}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
