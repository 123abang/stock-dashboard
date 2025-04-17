
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Briefcase 
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

interface PortfolioCardProps {
  id: string;
  name: string;
  assetCount: number;
  totalValue: number;
  totalChange: number;
  totalChangePercentage: number;
}

const PortfolioCard = ({
  id,
  name,
  assetCount,
  totalValue,
  totalChange,
  totalChangePercentage,
}: PortfolioCardProps) => {
  const isPositive = totalChange >= 0;

  return (
    <Link to={`/portfolios/${id}`}>
      <Card className="overflow-hidden bg-white dark:bg-dashboard-card border-0 shadow-md hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center gap-3 py-4 px-6">
          <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
            <Briefcase className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <h3 className="font-medium text-md dark:text-white">{name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{assetCount} assets</p>
          </div>
        </CardHeader>
        
        <CardContent className="px-6 py-2">
          <p className="text-xl font-semibold dark:text-white">
            ${totalValue.toLocaleString('en-US')}
          </p>
          <div className="flex items-center mt-1">
            <span className={`text-sm ${isPositive ? 'text-dashboard-green' : 'text-dashboard-red'}`}>
              {isPositive ? '+' : ''}{totalChange.toLocaleString('en-US')} ({isPositive ? '+' : ''}{totalChangePercentage.toFixed(2)}%)
            </span>
          </div>
        </CardContent>
        
        <CardFooter className="px-6 py-4 flex justify-between items-center border-t border-gray-100 dark:border-gray-800">
          <span className="text-sm text-gray-500 dark:text-gray-400">View details</span>
          <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PortfolioCard;
