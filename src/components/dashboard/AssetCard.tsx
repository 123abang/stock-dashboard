
import { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowDownRight,
  Trash2,
  Star,
  MoreVertical
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AssetCardProps {
  name: string;
  ticker: string;
  price: number;
  change: number;
  changePercentage: number;
  logoUrl: string;
  marketCap?: string;
  volume?: string;
  portfolio?: string;
  onRemove?: () => void;
}

const AssetCard = ({
  name,
  ticker,
  price,
  change,
  changePercentage,
  logoUrl,
  marketCap,
  volume,
  portfolio,
  onRemove,
}: AssetCardProps) => {
  const [favorited, setFavorited] = useState(false);

  const isPositive = change >= 0;

  const toggleFavorite = () => {
    setFavorited(!favorited);
  };

  return (
    <Card className="overflow-hidden bg-white dark:bg-dashboard-card border-0 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-dashboard-highlight flex items-center justify-center overflow-hidden">
            <img src={logoUrl} alt={name} className="h-6 w-6" />
          </div>
          <div className="ml-3">
            <p className="font-medium text-sm dark:text-white">{name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{ticker}</p>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={toggleFavorite}>
              <Star 
                size={16} 
                className={cn(
                  "mr-2",
                  favorited ? "fill-yellow-400 text-yellow-400" : ""
                )}
              />
              {favorited ? "Remove from Favorites" : "Add to Favorites"}
            </DropdownMenuItem>
            {portfolio && (
              <DropdownMenuItem onClick={onRemove} className="text-red-500">
                <Trash2 size={16} className="mr-2" />
                Remove from {portfolio}
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent className="px-6 py-2">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold dark:text-white">
            ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          <div className={cn(
            "flex items-center space-x-1 rounded-full px-2 py-1",
            isPositive ? "bg-green-50 dark:bg-green-900/20" : "bg-red-50 dark:bg-red-900/20"
          )}>
            {isPositive ? (
              <ArrowUpRight size={16} className="text-dashboard-green" />
            ) : (
              <ArrowDownRight size={16} className="text-dashboard-red" />
            )}
            <span className={cn(
              "text-sm font-medium",
              isPositive ? "text-dashboard-green" : "text-dashboard-red"
            )}>
              {changePercentage.toFixed(2)}%
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-6 py-4 flex justify-between border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
        {marketCap && <span>MCap: {marketCap}</span>}
        {volume && <span>Vol: {volume}</span>}
      </CardFooter>
    </Card>
  );
};

export default AssetCard;
