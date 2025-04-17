
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TrendAsset {
  name: string;
  ticker: string;
  price: number;
  change: number;
  volume: string;
}

interface MarketTrendsProps {
  title: string;
  assets: TrendAsset[];
}

const MarketTrends = ({ title, assets }: MarketTrendsProps) => {
  return (
    <Card className="bg-white dark:bg-dashboard-card border-0 shadow-md">
      <CardHeader className="pb-2">
        <h3 className="text-md font-medium text-gray-900 dark:text-white">{title}</h3>
      </CardHeader>
      <CardContent className="p-0">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-right">Price</th>
              <th className="px-6 py-3 text-right">24h</th>
              <th className="px-6 py-3 text-right hidden md:table-cell">Volume</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {assets.map((asset, index) => {
              const isPositive = asset.change >= 0;
              
              return (
                <tr 
                  key={asset.ticker} 
                  className="hover:bg-gray-50 dark:hover:bg-dashboard-highlight/30 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="text-sm font-medium dark:text-white">{asset.name}</div>
                      <div className="ml-2 text-xs text-gray-500 dark:text-gray-400">{asset.ticker}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="text-sm font-medium dark:text-white">
                      ${asset.price.toLocaleString('en-US')}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className={cn(
                      "inline-flex items-center space-x-1",
                      isPositive ? "text-dashboard-green" : "text-dashboard-red"
                    )}>
                      {isPositive ? (
                        <ArrowUpRight size={14} />
                      ) : (
                        <ArrowDownRight size={14} />
                      )}
                      <span>{Math.abs(asset.change).toFixed(2)}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right hidden md:table-cell">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {asset.volume}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default MarketTrends;
