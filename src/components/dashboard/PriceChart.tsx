
import { useEffect, useRef } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent } from '@/components/ui/card';

interface PriceChartProps {
  data: Array<{ date: string; price: number }>;
  color?: string;
  period?: '1D' | '1W' | '1M' | '3M' | '1Y' | '5Y';
  isPositive?: boolean;
  showGrid?: boolean;
}

const PriceChart = ({
  data,
  color = "#38E25D",
  period = "1M",
  isPositive = true,
  showGrid = false,
}: PriceChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation effect for chart on load
    const container = chartContainerRef.current;
    if (container) {
      container.style.opacity = '0';
      container.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        container.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  const chartColor = isPositive ? color : "#FF5C5C";

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-dashboard-card p-2 border border-gray-200 dark:border-gray-700 rounded-md shadow-md">
          <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            ${payload[0].value.toFixed(2)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="w-full h-full bg-white dark:bg-dashboard-card border-0 shadow-md">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-medium text-gray-900 dark:text-white">Price Chart</h3>
          <div className="flex space-x-1">
            {['1D', '1W', '1M', '3M', '1Y', '5Y'].map(p => (
              <button
                key={p}
                className={`px-2 py-1 text-xs rounded-md transition-colors ${
                  period === p 
                    ? 'bg-gray-200 dark:bg-dashboard-highlight text-gray-900 dark:text-white' 
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dashboard-highlight/30'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <div ref={chartContainerRef} className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.1} />}
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#888' }} 
                minTickGap={30}
              />
              <YAxis 
                hide={true}
                domain={['dataMin - 5', 'dataMax + 5']}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke={chartColor} 
                strokeWidth={2} 
                dot={false} 
                activeDot={{ r: 4, fill: chartColor, stroke: 'white', strokeWidth: 2 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceChart;
