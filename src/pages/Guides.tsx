
import Layout from '@/components/layouts/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  ArrowRight, 
  Clock,
  TrendingUp,
  Wallet,
  LineChart,
  ChartBar,
  BookMarked,
  ShieldAlert
} from 'lucide-react';

const guides = [
  {
    id: 1,
    title: "Getting Started with Stock Investing",
    description: "A comprehensive beginner's guide to understand the stock market and make your first investment.",
    icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
    level: "Beginner",
    timeToRead: "15 min",
    category: "Stocks"
  },
  {
    id: 2,
    title: "Cryptocurrency Fundamentals",
    description: "Learn the basics of blockchain technology, cryptocurrencies, and how to safely store digital assets.",
    icon: <Wallet className="h-6 w-6 text-purple-500" />,
    level: "Beginner",
    timeToRead: "20 min",
    category: "Crypto"
  },
  {
    id: 3,
    title: "Technical Analysis Explained",
    description: "Master the art of reading charts and using technical indicators to identify trading opportunities.",
    icon: <LineChart className="h-6 w-6 text-green-500" />,
    level: "Intermediate",
    timeToRead: "25 min",
    category: "Analysis"
  },
  {
    id: 4,
    title: "Building a Diversified Portfolio",
    description: "Strategies to create a balanced portfolio that minimizes risk while maximizing potential returns.",
    icon: <ChartBar className="h-6 w-6 text-orange-500" />,
    level: "Intermediate",
    timeToRead: "18 min",
    category: "Portfolio"
  },
  {
    id: 5,
    title: "Fundamental Analysis for Value Investors",
    description: "How to evaluate companies based on financial statements and find undervalued stocks.",
    icon: <BookMarked className="h-6 w-6 text-red-500" />,
    level: "Advanced",
    timeToRead: "30 min",
    category: "Analysis"
  },
  {
    id: 6,
    title: "Risk Management Strategies",
    description: "Essential techniques to protect your investments and minimize losses in volatile markets.",
    icon: <ShieldAlert className="h-6 w-6 text-yellow-500" />,
    level: "All Levels",
    timeToRead: "22 min",
    category: "Strategy"
  }
];

const categories = [
  { name: "All", active: true },
  { name: "Stocks", active: false },
  { name: "Crypto", active: false },
  { name: "Analysis", active: false },
  { name: "Portfolio", active: false },
  { name: "Strategy", active: false }
];

const levels = [
  { name: "All Levels", active: true },
  { name: "Beginner", active: false },
  { name: "Intermediate", active: false },
  { name: "Advanced", active: false }
];

const Guides = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-dashboard-green" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Investment Guides & Tutorials
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn the fundamentals of investing and master advanced strategies with our expert-written guides
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Categories:</span>
            {categories.map((category) => (
              <Badge 
                key={category.name}
                variant={category.active ? "default" : "outline"}
                className={`cursor-pointer ${
                  category.active 
                    ? "bg-dashboard-green hover:bg-dashboard-green/90" 
                    : "hover:bg-gray-100 dark:hover:bg-dashboard-highlight/50"
                }`}
              >
                {category.name}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Level:</span>
            {levels.map((level) => (
              <Badge 
                key={level.name}
                variant={level.active ? "default" : "outline"}
                className={`cursor-pointer ${
                  level.active 
                    ? "bg-dashboard-green hover:bg-dashboard-green/90" 
                    : "hover:bg-gray-100 dark:hover:bg-dashboard-highlight/50"
                }`}
              >
                {level.name}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guides.map((guide) => (
            <Card key={guide.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  {guide.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {guide.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <Badge variant="outline" className="bg-gray-50 dark:bg-dashboard-highlight/20">
                    {guide.category}
                  </Badge>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{guide.timeToRead}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {guide.level}
                  </span>
                  <Button variant="ghost" size="sm" className="text-dashboard-green hover:text-dashboard-green/90 hover:bg-dashboard-green/10 p-0">
                    Read Guide <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Newsletter */}
        <div className="bg-gray-50 dark:bg-dashboard-highlight/20 rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Get Investment Tips in Your Inbox
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Subscribe to our newsletter for weekly guides, market updates, and exclusive investment strategies.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md flex-grow dark:bg-dashboard-card dark:text-white"
                required
              />
              <Button className="bg-dashboard-green hover:bg-dashboard-green/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Guides;
