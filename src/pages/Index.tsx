
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layouts/Layout';
import { Button } from '@/components/ui/button';
import ThreeDAssetModel from '@/components/ui/3d-asset-model';
import { partnerLogos } from '@/data/partnerLogos';
import { 
  Star,
  Triangle,
  Circle,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Users,
  BarChart3,
  Wallet,
  ChevronRight,
} from 'lucide-react';

const Index = () => {
  // Refs for animation on scroll
  const heroRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const partnerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const partnerContainerRef = useRef<HTMLDivElement>(null);

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
    if (heroRef.current) observer.observe(heroRef.current);
    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    partnerRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* Main Content */}
      <div className="min-h-screen text-white overflow-hidden relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-90 z-0"></div>
        <div className="absolute w-full h-full">
          <div className="absolute top-1/4 left-1/4 opacity-20">
            <Star className="text-purple-400 w-6 h-6" />
          </div>
          <div className="absolute top-3/4 right-1/3 opacity-20">
            <Triangle className="text-blue-400 w-8 h-8" />
          </div>
          <div className="absolute bottom-1/4 left-1/2 opacity-20">
            <Circle className="text-cyan-400 w-4 h-4" />
          </div>
        </div>

        {/* Hero Section */}
        <div 
          ref={heroRef}
          className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4"
        >
          {/* Orbital Ring */}
          <div className="absolute w-[800px] h-[800px] border border-gray-800/30 rounded-full"></div>
          <div className="absolute w-[600px] h-[600px] border border-gray-800/20 rounded-full"></div>

          {/* Floating Crypto Elements */}
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg border border-gray-800/50">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
              <div>
                <p className="text-white text-sm font-medium">Quant</p>
                <p className="text-gray-400 text-xs">2.65k</p>
              </div>
            </div>
          </div>

          <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg border border-gray-800/50">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
              <div>
                <p className="text-white text-sm font-medium">Meeton</p>
                <p className="text-gray-400 text-xs">4.89</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg border border-gray-800/50">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
              <div>
                <p className="text-white text-sm font-medium">Aelf</p>
                <p className="text-gray-400 text-xs">15.43</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-1/3 left-1/4 transform -translate-x-1/2 translate-y-1/2 bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg border border-gray-800/50">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <div>
                <p className="text-white text-sm font-medium">Cortex</p>
                <p className="text-gray-400 text-xs">20.93k</p>
              </div>
            </div>
          </div>

          {/* Central Content */}
          <div className="text-center max-w-3xl mx-auto z-10 space-y-6">
            <div className="bg-gray-900/30 backdrop-blur-sm px-4 py-1 rounded-full inline-block mb-2">
              <p className="text-xs text-gray-400">Join us in the next world</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              StockCrypt Odyssey
            </h1>
            <h2 className="text-3xl md:text-5xl font-light text-gray-300">Sailing The Seas Of Crypto</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
              Like High-Quality Visuals Related To Cryptocurrencies, Blockchain, Or Financial Technology
            </p>
            <Button className="mt-8 bg-white hover:bg-gray-200 text-black rounded-full px-8 py-6">
              Discover Those Worlds
            </Button>
          </div>

          {/* Stats Section */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-gray-900/80 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50 w-full max-w-md">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-4xl font-bold flex items-center">
                  98.2%
                  <span className="text-green-400 text-xl ml-2">↑</span>
                </h3>
                <p className="text-sm text-gray-400 mt-1">Spots - Worldwide</p>
                <p className="text-xs text-gray-500 mt-2 max-w-xs">
                  Innovative blockchain technology meets financial expertise to empower your investment journey
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        i % 3 === 0 ? "bg-purple-500" : i % 3 === 1 ? "bg-blue-500" : "bg-cyan-500"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Market Trends Section */}
        <section className="py-32 mt-32 relative z-10 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Market Trends & Analytics</h2>
                <p className="text-gray-400">
                  Stay ahead of the market with real-time analytics and insights from our expert team of financial
                  analysts.
                </p>
              </div>
              <Button
                variant="outline"
                className="mt-4 md:mt-0 border-gray-700 hover:bg-gray-800 text-gray-300 flex items-center"
              >
                View all markets <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Bitcoin", symbol: "BTC", price: "$43,256.78", change: "+5.67%", color: "text-green-500" },
                { name: "Ethereum", symbol: "ETH", price: "$3,124.45", change: "+3.21%", color: "text-green-500" },
                { name: "Solana", symbol: "SOL", price: "$98.32", change: "-1.45%", color: "text-red-500" },
              ].map((coin, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{coin.name}</h3>
                      <p className="text-gray-400 text-sm">{coin.symbol}</p>
                    </div>
                    <div className="bg-gray-800 p-2 rounded-lg">
                      <TrendingUp className={`h-5 w-5 ${coin.color}`} />
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-2xl font-bold">{coin.price}</p>
                    <p className={`${coin.color} font-medium`}>{coin.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative z-10 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Explore Our Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                StockCrypt Odyssey offers a comprehensive suite of tools and features to help you navigate the crypto
                universe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="h-6 w-6 text-purple-500" />,
                  title: "Advanced Security",
                  description: "Multi-layer security protocols to keep your assets safe and secure at all times.",
                },
                {
                  icon: <Zap className="h-6 w-6 text-blue-500" />,
                  title: "Lightning Fast Trades",
                  description: "Execute trades in milliseconds with our high-performance trading engine.",
                },
                {
                  icon: <Globe className="h-6 w-6 text-cyan-500" />,
                  title: "Global Access",
                  description: "Access markets from anywhere in the world with our decentralized platform.",
                },
                {
                  icon: <BarChart3 className="h-6 w-6 text-green-500" />,
                  title: "Advanced Analytics",
                  description: "Powerful tools to analyze market trends and make informed investment decisions.",
                },
                {
                  icon: <Wallet className="h-6 w-6 text-yellow-500" />,
                  title: "Multi-Wallet Support",
                  description: "Connect and manage multiple wallets from a single dashboard.",
                },
                {
                  icon: <Users className="h-6 w-6 text-pink-500" />,
                  title: "Community Governance",
                  description: "Be part of the decision-making process with our community governance model.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => (featureRefs.current[index] = el)}
                  className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 opacity-0 translate-x-10"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gray-800/50 p-3 rounded-lg w-fit mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DeFi Ecosystem Section */}
        <section className="py-24 relative z-10 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-xl"></div>
                  <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Total Value Locked", value: "$4.8B" },
                        { label: "Active Users", value: "2.3M+" },
                        { label: "Supported Chains", value: "15+" },
                        { label: "Daily Transactions", value: "1.2M" },
                      ].map((stat, index) => (
                        <div key={index} className="p-4 bg-gray-800/50 rounded-lg">
                          <p className="text-gray-400 text-sm">{stat.label}</p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our DeFi Ecosystem</h2>
                <p className="text-gray-400 mb-6">
                  StockCrypt's DeFi ecosystem is designed to provide users with a seamless experience across multiple
                  blockchain networks.
                </p>
                <ul className="space-y-4">
                  {[
                    "Yield Farming with up to 25% APY",
                    "Liquidity Pools with minimal impermanent loss",
                    "Cross-chain swaps with the lowest fees",
                    "Decentralized lending and borrowing",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white">Explore DeFi Options</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-b from-transparent to-gray-900/30 relative z-10 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Join thousands of satisfied users who have transformed their crypto experience with StockCrypt Odyssey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "StockCrypt has completely transformed how I interact with DeFi protocols. The interface is intuitive and the analytics are top-notch.",
                  name: "Alex Thompson",
                  title: "Crypto Investor",
                },
                {
                  quote:
                    "The security features give me peace of mind, and the yields I've been getting are consistently better than other platforms I've used.",
                  name: "Sarah Chen",
                  title: "DeFi Enthusiast",
                },
                {
                  quote:
                    "As an institutional investor, the advanced trading tools and analytics provided by StockCrypt are invaluable for our strategy.",
                  name: "Michael Rodriguez",
                  title: "Fund Manager",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50">
                  <div className="mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="inline-block h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-24 relative z-10 px-4" ref={partnerContainerRef}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners & Collaborators</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We work with leading blockchain networks, financial institutions, and technology providers to deliver
                the best experience.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
                <div
                  key={partner}
                  ref={(el) => (partnerRefs.current[partner - 1] = el)}
                  className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 flex items-center justify-center h-24 opacity-0 translate-x-10"
                  style={{ transitionDelay: `${partner * 0.05}s` }}
                >
                  <div className="w-16 h-16 bg-gray-800/70 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                      P{partner}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-12 rounded-2xl border border-gray-800/50">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Begin Your Odyssey?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of traders and investors who have already embarked on their journey through the
                  crypto universe with StockCrypt.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/signup">
                    <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6">Get Started Now</Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-300 px-8 py-6">
                      Schedule a Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
