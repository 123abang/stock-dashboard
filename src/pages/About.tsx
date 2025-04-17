
import { useRef, useEffect } from 'react';
import Layout from '@/components/layouts/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ThreeDAssetModel from '@/components/ui/3d-asset-model';
import { 
  CheckCircle,
  Trophy,
  TrendingUp,
  Globe
} from 'lucide-react';

const About = () => {
  // Refs for animation on scroll
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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

  const partnerLogos = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/800px-Meta_Platforms_Inc._logo.svg.png" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/800px-Microsoft_logo.svg.png" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" }
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      bio: "Former investment banker with 10+ years experience in fintech and blockchain technologies."
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      bio: "Backend architecture expert who previously led engineering teams at major tech companies."
    },
    {
      name: "Marcus Williams",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      bio: "Product specialist with a background in UX design and financial markets analysis."
    },
    {
      name: "Priya Patel",
      role: "Head of Analytics",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      bio: "Data scientist specializing in predictive algorithms and financial market analysis."
    }
  ];
  
  const milestones = [
    { year: "2023", title: "Founded", description: "StockCrypt was founded with a vision to democratize financial analytics" },
    { year: "2023", title: "Seed Funding", description: "Secured $2.5M in seed funding from leading venture capital firms" },
    { year: "2024", title: "Beta Launch", description: "Successfully launched our beta product with 10,000 early adopters" },
    { year: "2025", title: "Series A", description: "Raised $12M in Series A funding to accelerate growth and innovation" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-100 dark:from-dashboard-bg dark:to-dashboard-card py-20 px-4 sm:px-6 lg:px-8">
        <div 
          ref={(el) => (sectionRefs.current[0] = el)}
          className="max-w-7xl mx-auto opacity-0 translate-x-10"
        >
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
              About StockCrypt
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're on a mission to make financial insights simple and accessible to everyone, from beginners to professional investors.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white dark:bg-dashboard-card border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-dashboard-green" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To democratize access to financial markets by providing powerful yet simple tools for everyone.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-dashboard-card border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To become the world's most trusted platform for investment tracking and financial decision-making.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-dashboard-card border-0 shadow-md hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Values</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Transparency, reliability, and empowering users with knowledge and tools to succeed in financial markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dashboard-bg">
        <div 
          ref={(el) => (sectionRefs.current[1] = el)}
          className="max-w-7xl mx-auto opacity-0 translate-x-10"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  StockCrypt was born from a simple observation: while financial markets affect everyone, the tools to understand and navigate them were often complex, expensive, or built for professionals.
                </p>
                <p>
                  Founded in 2023, our team of financial experts and technology innovators came together with a shared mission – to create a platform that makes tracking investments and understanding market trends accessible to everyone.
                </p>
                <p>
                  Today, we're proud to serve thousands of users worldwide, from beginners making their first investments to seasoned portfolio managers looking for efficient tracking tools.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Milestones</h3>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-dashboard-highlight flex items-center justify-center text-gray-700 dark:text-gray-300 font-medium">
                          {milestone.year.substring(2)}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                          {milestone.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden bg-gradient-to-br from-dashboard-green/10 to-blue-500/10 flex items-center justify-center">
                {/* 3D Models */}
                <div className="absolute top-20 left-20">
                  <ThreeDAssetModel type="bitcoin" size={150} />
                </div>
                <div className="absolute bottom-40 right-20">
                  <ThreeDAssetModel type="ethereum" size={120} />
                </div>
                <div className="absolute bottom-20 left-40">
                  <ThreeDAssetModel type="stock" size={100} />
                </div>
                
                {/* Floating cards */}
                <div className="glass-effect absolute top-10 right-10 p-4 w-44 shadow-lg animate-float">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Our Mission</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">Simplify financial tracking for everyone</div>
                </div>
                
                <div className="glass-effect absolute bottom-10 left-10 p-4 w-44 shadow-lg" style={{ animationDelay: "0.5s", animation: "float 3s ease-in-out 0.5s infinite" }}>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Our Growth</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">Serving 50,000+ users worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dashboard-card">
        <div 
          ref={(el) => (sectionRefs.current[2] = el)}
          className="max-w-7xl mx-auto opacity-0 translate-x-10"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts is passionate about financial technology and customer success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white dark:bg-dashboard-bg border-0 shadow-md overflow-hidden">
                <div className="aspect-square w-full">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-dashboard-green font-medium text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dashboard-bg">
        <div 
          ref={(el) => (sectionRefs.current[3] = el)}
          className="max-w-7xl mx-auto opacity-0 translate-x-10"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We collaborate with industry leaders to bring you the best financial tools and insights.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {partnerLogos.map((partner, index) => (
              <div key={partner.name} className="h-20 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dashboard-card">
        <div 
          ref={(el) => (sectionRefs.current[4] = el)}
          className="max-w-7xl mx-auto opacity-0 translate-x-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-dashboard-green mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Global Reach
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Our platform serves users in over 120 countries, providing localized financial data and insights for global markets.
                </p>
                <p>
                  With support for multiple currencies and exchanges worldwide, StockCrypt helps you track investments no matter where they're located.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white dark:bg-dashboard-bg p-4 rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-dashboard-green">120+</p>
                  <p className="text-gray-600 dark:text-gray-300">Countries</p>
                </div>
                <div className="bg-white dark:bg-dashboard-bg p-4 rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-blue-500">50,000+</p>
                  <p className="text-gray-600 dark:text-gray-300">Users</p>
                </div>
                <div className="bg-white dark:bg-dashboard-bg p-4 rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-purple-500">200+</p>
                  <p className="text-gray-600 dark:text-gray-300">Exchanges</p>
                </div>
                <div className="bg-white dark:bg-dashboard-bg p-4 rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-yellow-500">25+</p>
                  <p className="text-gray-600 dark:text-gray-300">Languages</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden bg-white dark:bg-dashboard-bg shadow-md">
                {/* World map placeholder - in a real app, this could be an interactive map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-300 dark:text-gray-700 text-9xl">🗺️</div>
                </div>
                
                {/* Global presence indicators */}
                <div className="absolute top-1/4 left-1/4 h-3 w-3 bg-dashboard-green rounded-full pulse"></div>
                <div className="absolute top-1/3 left-2/3 h-3 w-3 bg-dashboard-green rounded-full pulse"></div>
                <div className="absolute top-2/3 left-1/5 h-3 w-3 bg-dashboard-green rounded-full pulse"></div>
                <div className="absolute top-1/2 left-3/4 h-3 w-3 bg-dashboard-green rounded-full pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dashboard-green">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to join our community?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Start tracking your investments and making better financial decisions today.
          </p>
          <Button size="lg" className="bg-white text-dashboard-green hover:bg-gray-100">
            Get Started Now
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
