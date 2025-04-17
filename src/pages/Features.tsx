
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layouts/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ThreeDAssetModel from '@/components/ui/3d-asset-model';
import PriceChart from '@/components/dashboard/PriceChart';
import {
  BarChart3,
  CandlestickChart,
  Clock,
  Coins,
  FileText,
  Globe,
  LineChart,
  Lightbulb,
  RefreshCw,
  Shield,
  Smartphone,
  TrendingUp,
} from 'lucide-react';

// Mock chart data
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

const Features = () => {
  // Refs for animation on scroll
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [chartData] = useState(generateMockChartData());
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          entry.target.classList.remove('opacity-0', 'translate-x-10');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observe elements
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <LineChart className="h-6 w-6 text-dashboard-green" />,
      title: "Real-Time Price Updates",
      description: "Stay informed with real-time data for thousands of stocks and cryptocurrencies from exchanges worldwide."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-500" />,
      title: "Portfolio Management",
      description: "Create and manage multiple portfolios organized by strategy, asset type, or your own custom categories."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-500" />,
      title: "Advanced Analytics",
      description: "Access technical analysis tools and indicators to make informed investment decisions."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      title: "Global Markets",
      description: "Track assets from markets around the world with multi-currency support and exchange rate conversion."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
      title: "AI Predictions",
      description: "Leverage our AI algorithms for market trend predictions and personalized investment insights."
    },
    {
      icon: <FileText className="h-6 w-6 text-gray-600 dark:text-gray-400" />,
      title: "News Integration",
      description: "Get the latest market news and analysis affecting your portfolio assets in real-time."
    },
    {
      icon: <CandlestickChart className="h-6 w-6 text-orange-500" />,
      title: "Advanced Charts",
      description: "Visualize price movements with customizable charts including candlestick, line, and area charts."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-cyan-500" />,
      title: "Automatic Syncing",
      description: "Your portfolio data automatically syncs across all your devices for a seamless experience."
    },
    {
      icon: <Shield className="h-6 w-6 text-red-500" />,
      title: "Security First",
      description: "Bank-level encryption and security measures keep your financial information safe and private."
    },
    {
      icon: <Coins className="h-6 w-6 text-amber-500" />,
      title: "Multi-Asset Support",
      description: "Track stocks, ETFs, cryptocurrencies, and more all in one unified interface."
    },
    {
      icon: <Clock className="h-6 w-6 text-indigo-500" />,
      title: "Historical Data",
      description: "Access years of historical price data for comprehensive analysis and performance tracking."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-green-600" />,
      title: "Mobile Apps",
      description: "Native mobile apps for iOS and Android with the same powerful features as the web platform."
    },
  ];

  const tiers = [
    {
      name: "Basic",
      price: "Free",
      description: "Essential tools for beginner investors",
      features: [
        "Portfolio tracking (up to 2 portfolios)",
        "15-minute delayed price updates",
        "Basic charts and analytics",
        "Limited historical data (1 year)",
        "Web platform access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Premium",
      price: "$12",
      description: "Advanced features for active investors",
      features: [
        "Unlimited portfolios",
        "Real-time price updates",
        "Advanced charts and technical indicators",
        "Full historical data",
        "Web and mobile app access",
        "AI-powered insights and predictions",
        "Priority customer support",
        "Custom notifications"
      ],
      cta: "Try Free for 7 Days",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Comprehensive solutions for investment professionals",
      features: [
        "All Premium features",
        "API access",
        "Custom integrations",
        "Team collaboration tools",
        "Dedicated account manager",
        "Advanced security features",
        "Custom reporting",
        "Training and onboarding"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-100 dark:from-dashboard-bg dark:to-dashboard-card py-20 px-4 sm:px-6 lg:px-8">
        <div 
          ref={(el) => (sectionRefs.current[0] = el)}
          className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center opacity-0 translate-x-10"
        >
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-6">
              Powerful Features for<br/>
              Smart Investors
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Our platform provides all the tools you need to make informed investment decisions, track your portfolios, and stay ahead in the markets.
            </p>
            <div className="flex gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-dashboard-green hover:bg-dashboard-green/90 text-white">
                  Start Now
                </Button>
              </Link>
              <Button size="lg" variant="outline">See Demo</Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden bg-gradient-to-br from-dashboard-green/10 to-blue-500/10">
              <div className="absolute top-0 left-0 w-full h-full">
                <PriceChart data={chartData} isPositive={true} showGrid={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dashboard-bg">
        <div 
          ref={(el) => (sectionRefs.current[1] = el)}
          className="max-w-7xl mx-auto opacity-0 translate-x-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              StockCrypt combines powerful financial tools with an easy-to-use interface to help you make better investment decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-white dark:bg-dashboard-card border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-dashboard-highlight flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* 3D Visualization Feature */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dashboard-card">
        <div 
          ref={(el) => (sectionRefs.current[2] = el)}
          className="max-w-7xl mx-auto opacity-0 translate-x-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Visual Asset Representation
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Our unique 3D visualization technology brings your portfolio to life, making complex financial data more intuitive and easier to understand.
                </p>
                <p>
                  See your assets in a dynamic, interactive way that helps you spot trends, identify opportunities, and make better investment decisions.
                </p>
                <p>
                  From stocks to crypto, our visualization tools provide a new perspective on your investments that static charts and tables simply can't match.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/dashboard">
                  <Button className="bg-dashboard-green hover:bg-dashboard-green/90 text-white">
                    Explore Visualizations
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-md">
                <div className="bg-white dark:bg-dashboard-bg rounded-xl p-6 flex flex-col items-center justify-center shadow-md">
                  <ThreeDAssetModel type="bitcoin" size={100} />
                  <p className="mt-4 text-center font-medium text-gray-900 dark:text-white">Bitcoin</p>
                  <p className="text-dashboard-green">+2.68%</p>
                </div>
                <div className="bg-white dark:bg-dashboard-bg rounded-xl p-6 flex flex-col items-center justify-center shadow-md">
                  <ThreeDAssetModel type="ethereum" size={100} />
                  <p className="mt-4 text-center font-medium text-gray-900 dark:text-white">Ethereum</p>
                  <p className="text-dashboard-red">-3.37%</p>
                </div>
                <div className="bg-white dark:bg-dashboard-bg rounded-xl p-6 flex flex-col items-center justify-center shadow-md">
                  <ThreeDAssetModel type="stock" size={100} />
                  <p className="mt-4 text-center font-medium text-gray-900 dark:text-white">Stocks</p>
                  <p className="text-dashboard-green">+1.97%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dashboard-bg">
        <div 
          ref={(el) => (sectionRefs.current[3] = el)}
          className="max-w-7xl mx-auto opacity-0 translate-x-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Choose the Right Plan for You
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you're a beginner investor or a professional trader, we have a plan that fits your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  tier.popular 
                    ? 'border-2 border-dashboard-green shadow-xl scale-105 dark:bg-dashboard-highlight/20' 
                    : 'border border-gray-200 dark:border-gray-700 shadow-lg'
                }`}
              >
                {tier.popular && (
                  <div className="bg-dashboard-green text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{tier.name}</h3>
                    <div className="mt-2 flex items-baseline">
                      {tier.price === "Custom" ? (
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">Custom pricing</span>
                      ) : (
                        <>
                          <span className="text-4xl font-bold text-gray-900 dark:text-white">{tier.price}</span>
                          {tier.price !== "Free" && (
                            <span className="ml-1 text-gray-500 dark:text-gray-400">/month</span>
                          )}
                        </>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{tier.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-dashboard-green flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-2 text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button
                    className={
                      tier.popular 
                        ? "w-full bg-dashboard-green hover:bg-dashboard-green/90 text-white" 
                        : "w-full"
                    }
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              All plans include a 30-day money-back guarantee. No commitment required.
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dashboard-card">
        <div 
          ref={(el) => (sectionRefs.current[4] = el)}
          className="max-w-7xl mx-auto opacity-0 translate-x-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied investors who use StockCrypt every day to manage their portfolios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "StockCrypt has completely changed how I manage my investments. The interface is intuitive, and the real-time updates help me stay on top of market changes.",
                author: "Michael T.",
                role: "Individual Investor",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
              },
              {
                quote: "As a professional trader, I need reliable tools that give me an edge. The analytics and predictions provided by StockCrypt are incredibly accurate and valuable.",
                author: "Elena R.",
                role: "Day Trader",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
              },
              {
                quote: "I've tried many portfolio tracking apps, but none compare to StockCrypt. The ability to create multiple portfolios and see them visualized in 3D is game-changing.",
                author: "David L.",
                role: "Investment Advisor",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white dark:bg-dashboard-bg border-0 shadow-md p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    {/* Quote icon */}
                    <svg className="h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 flex-grow">
                    {testimonial.quote}
                  </p>
                  
                  <div className="mt-6 flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h4 className="text-md font-medium text-gray-900 dark:text-white">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dashboard-green">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to elevate your investment strategy?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of investors who are already using StockCrypt to make smarter investment decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-dashboard-green hover:bg-gray-100">
                Sign Up Free
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
