
import { Dispatch, SetStateAction } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { 
  ChevronLeft, 
  ChevronRight,
  LayoutDashboard, 
  Search, 
  Wallet, 
  BarChart3, 
  Newspaper,
  Settings, 
  Bell, 
  LogOut, 
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface DashboardSidebarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const DashboardSidebar = ({ open, setOpen }: DashboardSidebarProps) => {
  const location = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    { icon: LayoutDashboard, name: 'Dashboard', path: '/dashboard' },
    { icon: Search, name: 'Search Assets', path: '/search' },
    { icon: Wallet, name: 'Portfolios', path: '/portfolios' },
    { icon: BarChart3, name: 'Analysis', path: '/analysis' },
    { icon: Newspaper, name: 'News', path: '/news' },
  ];
  
  const bottomMenuItems = [
    { icon: Bell, name: 'Notifications', path: '/notifications' },
    { icon: User, name: 'Profile', path: '/profile' },
    { icon: Settings, name: 'Settings', path: '/settings' },
  ];

  const toggleCollapse = () => {
    setOpen(!open);
  };

  return (
    <div 
      className={cn(
        "fixed left-0 top-0 z-40 h-screen flex-shrink-0 transition-all duration-300 ease-in-out bg-white dark:bg-dashboard-bg border-r border-gray-200 dark:border-gray-800",
        open ? "w-[250px]" : "w-[70px]"
      )}
    >
      <div className="h-full flex flex-col justify-between p-4">
        <div>
          <div className="flex justify-between items-center mb-6 h-12">
            {open && (
              <Link to="/dashboard" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-dashboard-green bg-clip-text text-transparent">
                StockCrypt
              </Link>
            )}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "w-8 h-8 rounded-full",
                open ? "ml-auto" : "mx-auto"
              )}
              onClick={toggleCollapse}
            >
              {open ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </Button>
          </div>

          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center py-2 px-2 rounded-md transition-all",
                  location.pathname === item.path 
                    ? "bg-gray-100 dark:bg-dashboard-highlight text-dashboard-green" 
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dashboard-highlight/50 hover:text-dashboard-green"
                )}
              >
                <item.icon size={20} />
                {open && <span className="ml-3">{item.name}</span>}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          {bottomMenuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center py-2 px-2 rounded-md transition-all",
                location.pathname === item.path 
                  ? "bg-gray-100 dark:bg-dashboard-highlight text-dashboard-green" 
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dashboard-highlight/50 hover:text-dashboard-green"
              )}
            >
              <item.icon size={20} />
              {open && <span className="ml-3">{item.name}</span>}
            </Link>
          ))}

          <button
            onClick={logout}
            className="flex w-full items-center py-2 px-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dashboard-highlight/50 hover:text-red-500 transition-all"
          >
            <LogOut size={20} />
            {open && <span className="ml-3">Log out</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
