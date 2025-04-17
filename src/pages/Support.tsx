
import Layout from '@/components/layouts/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageSquare, 
  Mail, 
  FileText, 
  HelpCircle,
  PhoneCall,
  BookOpen,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const supportOptions = [
  {
    title: "Help Center",
    description: "Browse our comprehensive knowledge base for answers to common questions.",
    icon: <HelpCircle className="h-10 w-10 text-dashboard-green" />,
    link: "/faq",
    linkText: "Visit Help Center"
  },
  {
    title: "Email Support",
    description: "Get personalized help from our dedicated support team.",
    icon: <Mail className="h-10 w-10 text-blue-500" />,
    link: "#email-form",
    linkText: "Send Email"
  },
  {
    title: "Live Chat",
    description: "Chat with our support agents for immediate assistance.",
    icon: <MessageSquare className="h-10 w-10 text-purple-500" />,
    link: "#",
    linkText: "Start Chat"
  },
  {
    title: "Guides & Tutorials",
    description: "Learn how to use StockCrypt with step-by-step guides.",
    icon: <BookOpen className="h-10 w-10 text-orange-500" />,
    link: "/guides",
    linkText: "View Guides"
  }
];

const Support = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How Can We Help You?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our support team is dedicated to ensuring you have the best experience with StockCrypt
          </p>
        </div>
        
        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="mb-4 mt-2">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {option.description}
                </p>
                <Link to={option.link} className="mt-auto">
                  <Button variant="outline" className="border-dashboard-green text-dashboard-green hover:bg-dashboard-green/10">
                    {option.linkText}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Contact Form */}
        <div id="email-form" className="bg-gray-50 dark:bg-dashboard-highlight/20 rounded-xl p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
              Get in Touch
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="px-4 py-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md dark:bg-dashboard-card dark:text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="px-4 py-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md dark:bg-dashboard-card dark:text-white"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="px-4 py-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md dark:bg-dashboard-card dark:text-white"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="px-4 py-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md dark:bg-dashboard-card dark:text-white resize-none"
                  placeholder="Please describe your issue in detail..."
                  required
                />
              </div>
              
              <div>
                <Button className="bg-dashboard-green hover:bg-dashboard-green/90 w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Support Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <PhoneCall className="h-8 w-8 text-dashboard-green mb-4 mt-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Phone Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Premium users can access our dedicated phone support line
              </p>
              <p className="font-medium text-gray-900 dark:text-white mt-2">
                +1 (555) 123-4567
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                <Clock className="h-4 w-4 mr-1" />
                <span>Mon-Fri, 9am-5pm EST</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Users className="h-8 w-8 text-blue-500 mb-4 mt-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Community Forum
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join our community of investors to discuss strategies and get peer support
              </p>
              <Button variant="outline" className="mt-4 border-blue-500 text-blue-500 hover:bg-blue-500/10">
                Join Community
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <FileText className="h-8 w-8 text-purple-500 mb-4 mt-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Documentation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access our developer documentation for API integration guidelines
              </p>
              <Button variant="outline" className="mt-4 border-purple-500 text-purple-500 hover:bg-purple-500/10">
                View Docs
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Support Guarantee */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Our Support Guarantee
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
              We're committed to providing exceptional support to all our users
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Fast Response",
                description: "We aim to respond to all inquiries within 24 hours or less",
                icon: <Clock className="h-6 w-6 text-dashboard-green" />
              },
              {
                title: "Expert Team",
                description: "Our support team consists of financial and technical experts",
                icon: <Users className="h-6 w-6 text-dashboard-green" />
              },
              {
                title: "Satisfaction Guaranteed",
                description: "We're not happy until you're completely satisfied with our service",
                icon: <CheckCircle className="h-6 w-6 text-dashboard-green" />
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start p-4">
                <div className="mr-4 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
