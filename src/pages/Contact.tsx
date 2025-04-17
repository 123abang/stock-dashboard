
import { useState } from 'react';
import Layout from '@/components/layouts/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import {
  Mail, 
  Phone, 
  MapPin,
  MessageSquare,
  Send,
  Loader2
} from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setIsLoading(false);
  };
  
  const faqs = [
    {
      question: "How do I create a new portfolio?",
      answer: "After signing in, navigate to the Dashboard and click on the 'New Portfolio' button. You'll be prompted to name your portfolio and select which types of assets you'd like to track."
    },
    {
      question: "Can I track both stocks and cryptocurrencies?",
      answer: "Yes! StockCrypt allows you to track both traditional stocks and cryptocurrencies in the same portfolio or in separate portfolios depending on your preference."
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. We use end-to-end encryption for all your data and never share your personal information with third parties. Your security is our top priority."
    },
    {
      question: "How often is pricing data updated?",
      answer: "Our standard plan updates pricing data every 15 minutes during market hours. Premium subscribers get real-time updates for both stocks and cryptocurrencies."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, we offer mobile apps for both iOS and Android devices. You can download them from the respective app stores and sign in with your existing account."
    },
    {
      question: "How can I cancel my subscription?",
      answer: "You can cancel your subscription at any time from the Account Settings page. If you cancel, you'll still have access to your subscription benefits until the end of your current billing cycle."
    }
  ];

  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-white to-gray-100 dark:from-dashboard-bg dark:to-dashboard-card py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Our team is here to help with any inquiries you might have.
          </p>
        </div>
      </section>
      
      {/* Contact info + form section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dashboard-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact form */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Send us a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <Card className="bg-white dark:bg-dashboard-card border-0 shadow-md">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          disabled={isLoading}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="What is your message about?"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-dashboard-green hover:bg-dashboard-green/90 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact info + FAQ */}
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-dashboard-green/10 rounded-full p-3">
                      <Mail className="h-6 w-6 text-dashboard-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                      <a href="mailto:support@stockcrypt.com" className="text-dashboard-green hover:underline">
                        support@stockcrypt.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-dashboard-green/10 rounded-full p-3">
                      <Phone className="h-6 w-6 text-dashboard-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                      <a href="tel:+18001234567" className="text-dashboard-green hover:underline">
                        +1 (800) 123-4567
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Monday - Friday, 9AM - 5PM PT
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-dashboard-green/10 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-dashboard-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Office</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        123 Market Street<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <MessageSquare className="h-6 w-6 text-dashboard-green" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Frequently Asked Questions
                  </h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600 dark:text-gray-400">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map section - placeholder */}
      <section className="h-96 bg-gray-300 dark:bg-gray-800 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-600 dark:text-gray-400">
            Interactive Map Would Be Displayed Here
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
