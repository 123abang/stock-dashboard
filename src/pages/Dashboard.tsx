
import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import AssetCard from '@/components/dashboard/AssetCard';
import PriceChart from '@/components/dashboard/PriceChart';
import StatCard from '@/components/dashboard/StatCard';
import PortfolioCard from '@/components/dashboard/PortfolioCard';
import MarketTrends from '@/components/dashboard/MarketTrends';
import NewsCard from '@/components/dashboard/NewsCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import { 
  CircleDollarSign, 
  Wallet, 
  BarChart2, 
  TrendingUp,
  Search,
  Plus
} from 'lucide-react';

// Mock data
const generateMockChartData = (days = 30, startPrice = 100, volatility = 2, trend = 0.2) => {
  const data = [];
  let currentPrice = startPrice;

  for (let i = 0; i < days; i++) {
    // Add some randomness and trend
    const change = (Math.random() - 0.5) * volatility + trend;
    currentPrice = Math.max(0, currentPrice + change);
    
    const date = new Date();
    date.setDate(date.getDate() - (days - i));
    
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      price: currentPrice
    });
  }

  return data;
};

const mockAssets = [
  { 
    name: 'Bitcoin', 
    ticker: 'BTC', 
    price: 47890.25, 
    change: 1250.50, 
    changePercentage: 2.68, 
    logoUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    marketCap: '$900.4B',
    volume: '$28.6B'
  },
  { 
    name: 'Ethereum', 
    ticker: 'ETH', 
    price: 3456.78, 
    change: -120.34, 
    changePercentage: -3.37, 
    logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    marketCap: '$416.2B',
    volume: '$15.8B'
  },
  { 
    name: 'Apple Inc.', 
    ticker: 'AAPL', 
    price: 178.25, 
    change: 3.45, 
    changePercentage: 1.97, 
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    marketCap: '$2.8T',
    volume: '$5.6B'
  },
  { 
    name: 'Tesla', 
    ticker: 'TSLA', 
    price: 246.83, 
    change: -7.29, 
    changePercentage: -2.87, 
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
    marketCap: '$782.5B',
    volume: '$24.3B'
  },
];

const mockPortfolios = [
  {
    id: '1',
    name: 'Tech Stocks',
    assetCount: 5,
    totalValue: 12450,
    totalChange: 345.20,
    totalChangePercentage: 2.85
  },
  {
    id: '2',
    name: 'Crypto Picks',
    assetCount: 8,
    totalValue: 8760.45,
    totalChange: -230.75,
    totalChangePercentage: -2.57
  }
];

const mockTrendingStocks = [
  { name: 'Microsoft', ticker: 'MSFT', price: 345.67, change: 2.4, volume: '$12.5B' },
  { name: 'Amazon', ticker: 'AMZN', price: 142.83, change: 1.8, volume: '$15.2B' },
  { name: 'NVIDIA', ticker: 'NVDA', price: 471.20, change: 3.5, volume: '$32.1B' },
  { name: 'Google', ticker: 'GOOGL', price: 134.99, change: -0.7, volume: '$8.9B' },
  { name: 'Adobe', ticker: 'ADBE', price: 567.34, change: -1.2, volume: '$4.3B' }
];

const mockTrendingCrypto = [
  { name: 'Binance Coin', ticker: 'BNB', price: 345.67, change: 4.2, volume: '$1.6B' },
  { name: 'Cardano', ticker: 'ADA', price: 0.57, change: -2.3, volume: '$842M' },
  { name: 'Solana', ticker: 'SOL', price: 98.45, change: 5.7, volume: '$2.1B' },
  { name: 'XRP', ticker: 'XRP', price: 0.65, change: 1.3, volume: '$1.2B' },
  { name: 'Polkadot', ticker: 'DOT', price: 7.85, change: -0.9, volume: '$412M' }
];

const mockNews = [
  {
    title: 'Bitcoin Surges Past $47,000 As Institutional Interest Grows',
    source: 'CryptoNews',
    date: 'Apr 14, 2025',
    snippet: 'Bitcoin has broken through the $47,000 mark as institutional investors continue to show increased interest in the cryptocurrency market.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    url: '#'
  },
  {
    title: 'Tech Stocks Rally After Positive Earnings Reports',
    source: 'Market Watch',
    date: 'Apr 13, 2025',
    snippet: 'Technology stocks are seeing a significant rally following better-than-expected earnings reports from several major companies in the sector.',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    url: '#'
  },
  {
    title: 'Fed Signals Potential Rate Cut In Coming Months',
    source: 'Financial Times',
    date: 'Apr 12, 2025',
    snippet: 'The Federal Reserve has signaled that it may consider cutting interest rates in the coming months, citing improved inflation metrics.',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    url: '#'
  }
];

const Dashboard = () => {
  const { user } = useAuth();
  const [chartData, setChartData] = useState(generateMockChartData());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Hello, {user?.name || 'Investor'}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Welcome to your investment dashboard
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search assets..." 
                className="pl-10 w-64"
              />
            </div>
            <Button className="bg-dashboard-green hover:bg-dashboard-green/90">
              <Plus className="h-4 w-4 mr-2" />
              New Portfolio
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Portfolio Value" 
            value="$21,245.65" 
            change={4.2}
            icon={<CircleDollarSign className="h-4 w-4 text-dashboard-green" />}
            trend="up"
          />
          <StatCard 
            title="Daily Change" 
            value="+$892.40" 
            change={3.8}
            icon={<TrendingUp className="h-4 w-4 text-dashboard-green" />}
            trend="up"
          />
          <StatCard 
            title="Total Assets" 
            value="13" 
            icon={<Wallet className="h-4 w-4 text-blue-500" />}
          />
          <StatCard 
            title="Avg. Performance" 
            value="+5.2%" 
            icon={<BarChart2 className="h-4 w-4 text-purple-500" />}
            trend="up"
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Left Column - Chart */}
          <div className="xl:col-span-3 space-y-6">
            <PriceChart data={chartData} isPositive={true} />
            
            {/* Assets Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Top Assets
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {mockAssets.map((asset, index) => (
                  <AssetCard
                    key={index}
                    name={asset.name}
                    ticker={asset.ticker}
                    price={asset.price}
                    change={asset.change}
                    changePercentage={asset.changePercentage}
                    logoUrl={asset.logoUrl}
                    marketCap={asset.marketCap}
                    volume={asset.volume}
                    portfolio="My Portfolio"
                  />
                ))}
              </div>
            </div>
            
            {/* News Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Market News
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {mockNews.map((news, index) => (
                  <NewsCard
                    key={index}
                    title={news.title}
                    source={news.source}
                    date={news.date}
                    snippet={news.snippet}
                    imageUrl={news.imageUrl}
                    url={news.url}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Portfolios */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Your Portfolios
                </h2>
                <Button variant="ghost" size="sm" className="text-dashboard-green">
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {mockPortfolios.map((portfolio) => (
                  <PortfolioCard
                    key={portfolio.id}
                    id={portfolio.id}
                    name={portfolio.name}
                    assetCount={portfolio.assetCount}
                    totalValue={portfolio.totalValue}
                    totalChange={portfolio.totalChange}
                    totalChangePercentage={portfolio.totalChangePercentage}
                  />
                ))}
              </div>
            </div>
            
            {/* Market Trends */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Market Trends
              </h2>
              <Tabs defaultValue="stocks">
                <TabsList className="w-full mb-4">
                  <TabsTrigger value="stocks" className="flex-1">Stocks</TabsTrigger>
                  <TabsTrigger value="crypto" className="flex-1">Crypto</TabsTrigger>
                </TabsList>
                <TabsContent value="stocks">
                  <MarketTrends 
                    title="Trending Stocks" 
                    assets={mockTrendingStocks} 
                  />
                </TabsContent>
                <TabsContent value="crypto">
                  <MarketTrends 
                    title="Trending Cryptos" 
                    assets={mockTrendingCrypto} 
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
