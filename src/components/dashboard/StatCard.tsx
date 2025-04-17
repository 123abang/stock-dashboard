
import { ReactNode } from 'react';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

const StatCard = ({
  title,
  value,
  change,
  icon,
  trend = 'neutral',
  className,
}: StatCardProps) => {
  return (
    <Card className={cn(
      "overflow-hidden bg-white dark:bg-dashboard-card border-0 shadow-md hover:shadow-lg transition-shadow",
      className
    )}>
      <CardContent className="px-6 py-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
            <p className="text-2xl font-semibold mt-1 dark:text-white">{value}</p>
            
            {change !== undefined && (
              <div className="flex items-center mt-1">
                <span className={cn(
                  "text-xs",
                  trend === 'up' ? "text-dashboard-green" : 
                  trend === 'down' ? "text-dashboard-red" : 
                  "text-gray-500 dark:text-gray-400"
                )}>
                  {trend === 'up' ? '+' : trend === 'down' ? '' : ''}{change}%
                </span>
              </div>
            )}
          </div>
          
          {icon && (
            <div className="p-2 rounded-full bg-gray-100 dark:bg-dashboard-highlight">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
