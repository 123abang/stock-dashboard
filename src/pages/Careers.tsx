
import Layout from '@/components/layouts/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  Code,
  LineChart,
  Users,
  PenTool,
  ShieldCheck,
  Globe,
  Coffee,
  Medal,
  GraduationCap,
  Heart,
  Zap
} from 'lucide-react';

const openPositions = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$120K - $150K",
    description: "We're looking for an experienced frontend developer with React expertise to help build our next-generation financial dashboards and visualization tools."
  },
  {
    title: "Data Scientist",
    department: "Data & Analytics",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130K - $160K",
    description: "Join our data team to develop sophisticated algorithms and machine learning models for predicting market trends and asset performance."
  },
  {
    title: "Financial Analyst",
    department: "Research",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "$90K - $120K",
    description: "Help our users make informed investment decisions by providing expert financial analysis and market research reports."
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$110K - $140K",
    description: "Create intuitive and beautiful user experiences that make complex financial data accessible and actionable for our users."
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$120K - $150K",
    description: "Build and maintain our cloud infrastructure while ensuring high availability, scalability, and security for our financial platform."
  },
  {
    title: "Content Marketing Specialist",
    department: "Marketing",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$80K - $100K",
    description: "Create compelling content about finance, investing, and cryptocurrency to educate our audience and drive user acquisition."
  }
];

const departments = [
  { 
    name: "Engineering", 
    icon: <Code className="h-8 w-8 text-blue-500" />,
    description: "Build the technology that powers our financial platform."
  },
  { 
    name: "Data & Analytics", 
    icon: <LineChart className="h-8 w-8 text-green-500" />,
    description: "Turn complex financial data into actionable insights."
  },
  { 
    name: "Design", 
    icon: <PenTool className="h-8 w-8 text-purple-500" />,
    description: "Create beautiful, intuitive interfaces for our users."
  },
  { 
    name: "Research", 
    icon: <GraduationCap className="h-8 w-8 text-yellow-500" />,
    description: "Research market trends and investment opportunities."
  },
  { 
    name: "Marketing", 
    icon: <Zap className="h-8 w-8 text-orange-500" />,
    description: "Spread the word about our platform and acquire new users."
  },
  { 
    name: "Customer Success", 
    icon: <Heart className="h-8 w-8 text-red-500" />,
    description: "Ensure our users have the best possible experience."
  }
];

const perks = [
  { 
    icon: <Globe className="h-6 w-6 text-dashboard-green" />,
    title: "Remote-first culture",
    description: "Work from anywhere in the world with flexible hours."
  },
  { 
    icon: <DollarSign className="h-6 w-6 text-dashboard-green" />,
    title: "Competitive salary",
    description: "We offer top-of-market compensation packages."
  },
  { 
    icon: <Coffee className="h-6 w-6 text-dashboard-green" />,
    title: "Work-life balance",
    description: "Unlimited PTO and a minimum of 20 vacation days per year."
  },
  { 
    icon: <Medal className="h-6 w-6 text-dashboard-green" />,
    title: "Growth opportunities",
    description: "Clear career paths and regular performance reviews."
  },
  { 
    icon: <ShieldCheck className="h-6 w-6 text-dashboard-green" />,
    title: "Comprehensive benefits",
    description: "Health, dental, vision insurance and 401(k) matching."
  },
  { 
    icon: <Users className="h-6 w-6 text-dashboard-green" />,
    title: "Inclusive workplace",
    description: "We value diversity and different perspectives."
  }
];

const Careers = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Join Our Mission to Revolutionize Investment
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We're building the future of financial technology, and we need exceptional talent to help us get there. Explore our open positions and find your next opportunity.
          </p>
          <Button size="lg" className="bg-dashboard-green hover:bg-dashboard-green/90">
            View Open Positions
          </Button>
        </div>
        
        {/* Department Carousel */}
        <div className="py-12 bg-gray-50 dark:bg-dashboard-highlight/20 rounded-xl px-6 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
            Join a Department You Love
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white dark:bg-dashboard-bg rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {dept.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="flex items-start p-4">
                <div className="mr-4 mt-1">
                  {perk.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    {perk.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Open Positions */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-300 mt-2">
                        <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {position.salary}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mt-4">
                        {position.description}
                      </p>
                    </div>
                    <div className="md:w-auto">
                      <Button className="bg-dashboard-green hover:bg-dashboard-green/90 whitespace-nowrap">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-dashboard-green rounded-xl p-8 mb-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Don't See a Perfect Fit?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and tell us how you can contribute to our mission.
          </p>
          <Button size="lg" className="bg-white text-dashboard-green hover:bg-gray-100">
            Send Open Application
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
