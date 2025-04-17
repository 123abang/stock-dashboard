
import { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import AssetCard from '@/components/dashboard/AssetCard';
import PriceChart from '@/components/dashboard/PriceChart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { 
  User, 
  Calendar, 
  Mail, 
  Download, 
  FileText,
  PlusCircle,
  AlertTriangle,
  Wallet
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Separator } from '@/components/ui/separator';
import ThreeDAssetModel from '@/components/ui/3d-asset-model';

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

const mockStocks = [
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
  { 
    name: 'Microsoft', 
    ticker: 'MSFT', 
    price: 345.67, 
    change: 8.24, 
    changePercentage: 2.44, 
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    marketCap: '$2.6T',
    volume: '$7.3B'
  },
];

const mockCryptos = [
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
    name: 'Solana', 
    ticker: 'SOL', 
    price: 98.45, 
    change: 5.62, 
    changePercentage: 6.05, 
    logoUrl: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    marketCap: '$42.6B',
    volume: '$3.2B'
  },
];

const mockActivities = [
  { date: 'Apr 15, 2025', activity: 'Added Apple (AAPL) to Tech Stocks portfolio', type: 'add' },
  { date: 'Apr 14, 2025', activity: 'Updated profile settings', type: 'update' },
  { date: 'Apr 14, 2025', activity: 'Removed Netflix (NFLX) from Media Stocks portfolio', type: 'remove' },
  { date: 'Apr 12, 2025', activity: 'Created Crypto Picks portfolio', type: 'create' },
  { date: 'Apr 10, 2025', activity: 'Account created', type: 'account' }
];

const Profile = () => {
  const { user, logout } = useAuth();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [chartData] = useState(generateMockChartData());
  
  const handleDeleteAccount = () => {
    // In a real app, verify password and delete account
    logout();
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Profile & Assets
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Manage your account and view your investments
            </p>
          </div>
          <Button 
            variant="outline" 
            className="self-start md:self-auto"
            onClick={() => window.print()}
          >
            <Download className="h-4 w-4 mr-2" />
            Export Portfolio
          </Button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left Column - User Profile */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Profile Information</h2>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-dashboard-green flex items-center justify-center text-white text-2xl font-bold">
                    {user?.name ? user.name[0].toUpperCase() : 'U'}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {user?.name || 'User'}
                      </h3>
                      <Badge variant="outline" className="ml-2 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                        Investor
                      </Badge>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <User className="h-4 w-4 mr-2" />
                      Member since April 2025
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <Mail className="h-4 w-4 mr-2" />
                      {user?.email || 'user@example.com'}
                    </div>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">Account Summary</h3>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Portfolios</p>
                      <p className="font-medium text-gray-900 dark:text-white">2</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Total Assets</p>
                      <p className="font-medium text-gray-900 dark:text-white">6</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Stocks</p>
                      <p className="font-medium text-gray-900 dark:text-white">3</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Cryptocurrencies</p>
                      <p className="font-medium text-gray-900 dark:text-white">3</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 mt-6">
                  <Button variant="outline">Update Profile</Button>
                  <Button variant="outline">Change Password</Button>
                  <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="text-red-500 hover:text-red-600 hover:border-red-200">
                        Delete Account
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="flex items-center text-red-500">
                          <AlertTriangle className="h-5 w-5 mr-2" />
                          Delete Your Account
                        </DialogTitle>
                      </DialogHeader>
                      <div className="py-4">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          This action cannot be undone. All your data will be permanently deleted.
                        </p>
                        <Input
                          type="password"
                          placeholder="Enter your password to confirm"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="mb-2"
                        />
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
                          Cancel
                        </Button>
                        <Button variant="destructive" onClick={handleDeleteAccount}>
                          Delete Account
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`p-2 rounded-full ${
                        activity.type === 'add' ? 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400' :
                        activity.type === 'remove' ? 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400' :
                        activity.type === 'update' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' :
                        activity.type === 'create' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400' :
                        'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                      }`}>
                        {activity.type === 'add' && <PlusCircle className="h-4 w-4" />}
                        {activity.type === 'remove' && <AlertTriangle className="h-4 w-4" />}
                        {activity.type === 'update' && <FileText className="h-4 w-4" />}
                        {activity.type === 'create' && <Wallet className="h-4 w-4" />}
                        {activity.type === 'account' && <User className="h-4 w-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 dark:text-white">{activity.activity}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          {activity.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Portfolio Assets */}
          <div className="xl:col-span-2 space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Portfolio Overview</h2>
              </CardHeader>
              <CardContent className="p-0">
                <PriceChart data={chartData} isPositive={true} />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Tabs defaultValue="all">
                <div className="flex justify-between items-center mb-4">
                  <TabsList>
                    <TabsTrigger value="all">All Assets</TabsTrigger>
                    <TabsTrigger value="stocks">Stocks</TabsTrigger>
                    <TabsTrigger value="crypto">Crypto</TabsTrigger>
                  </TabsList>
                  <Button variant="outline" className="text-dashboard-green">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add Asset
                  </Button>
                </div>

                <TabsContent value="all" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Your Stocks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {mockStocks.map((stock, index) => (
                        <AssetCard
                          key={index}
                          name={stock.name}
                          ticker={stock.ticker}
                          price={stock.price}
                          change={stock.change}
                          changePercentage={stock.changePercentage}
                          logoUrl={stock.logoUrl}
                          marketCap={stock.marketCap}
                          volume={stock.volume}
                          portfolio="Tech Stocks"
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Your Cryptos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {mockCryptos.map((crypto, index) => (
                        <AssetCard
                          key={index}
                          name={crypto.name}
                          ticker={crypto.ticker}
                          price={crypto.price}
                          change={crypto.change}
                          changePercentage={crypto.changePercentage}
                          logoUrl={crypto.logoUrl}
                          marketCap={crypto.marketCap}
                          volume={crypto.volume}
                          portfolio="Crypto Picks"
                        />
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="stocks">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Your Stocks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockStocks.map((stock, index) => (
                      <AssetCard
                        key={index}
                        name={stock.name}
                        ticker={stock.ticker}
                        price={stock.price}
                        change={stock.change}
                        changePercentage={stock.changePercentage}
                        logoUrl={stock.logoUrl}
                        marketCap={stock.marketCap}
                        volume={stock.volume}
                        portfolio="Tech Stocks"
                      />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="crypto">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Your Cryptos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockCryptos.map((crypto, index) => (
                      <AssetCard
                        key={index}
                        name={crypto.name}
                        ticker={crypto.ticker}
                        price={crypto.price}
                        change={crypto.change}
                        changePercentage={crypto.changePercentage}
                        logoUrl={crypto.logoUrl}
                        marketCap={crypto.marketCap}
                        volume={crypto.volume}
                        portfolio="Crypto Picks"
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">3D Asset Visualization</h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
                  <div className="bg-gray-100 dark:bg-dashboard-highlight/30 rounded-xl p-6 flex flex-col items-center justify-center">
                    <ThreeDAssetModel type="bitcoin" size={120} />
                    <p className="mt-4 text-center font-medium">Bitcoin</p>
                    <p className="text-dashboard-green">+2.68%</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-dashboard-highlight/30 rounded-xl p-6 flex flex-col items-center justify-center">
                    <ThreeDAssetModel type="ethereum" size={120} />
                    <p className="mt-4 text-center font-medium">Ethereum</p>
                    <p className="text-dashboard-red">-3.37%</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-dashboard-highlight/30 rounded-xl p-6 flex flex-col items-center justify-center">
                    <ThreeDAssetModel type="stock" size={120} />
                    <p className="mt-4 text-center font-medium">Stocks</p>
                    <p className="text-dashboard-green">+1.97%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
