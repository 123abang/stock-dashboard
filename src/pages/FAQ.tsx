
import Layout from '@/components/layouts/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HelpCircle, Search, Mail } from 'lucide-react';

const faqCategories = [
  "General",
  "Account",
  "Portfolios",
  "Stocks",
  "Cryptocurrencies",
  "Security",
  "Billing"
];

const faqs = [
  {
    question: "What is StockCrypt?",
    answer: "StockCrypt is a comprehensive platform that allows you to track, analyze, and manage your stock and cryptocurrency investments in one place. It provides real-time market data, portfolio management tools, and predictive analytics to help you make informed investment decisions.",
    category: "General"
  },
  {
    question: "Is StockCrypt free to use?",
    answer: "Yes, StockCrypt offers a free basic plan that includes essential features like portfolio tracking and market data. For advanced features such as AI-powered predictions and unlimited portfolios, we offer premium subscription plans starting at $9.99 per month.",
    category: "General"
  },
  {
    question: "How do I create an account?",
    answer: "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. You can register using your email address and password. Once registered, you'll have access to all the features available in your chosen plan.",
    category: "Account"
  },
  {
    question: "Can I delete my account?",
    answer: "Yes, you can delete your account at any time by going to your Profile settings. Please note that account deletion is irreversible and all your data will be permanently removed from our systems.",
    category: "Account"
  },
  {
    question: "How do I create a portfolio?",
    answer: "To create a portfolio, navigate to the Dashboard page and click on the 'Create Portfolio' button. Enter a name for your portfolio, select a category (e.g., 'Tech Stocks', 'Crypto'), and click 'Create'. You can then add assets to your portfolio through the Search page.",
    category: "Portfolios"
  },
  {
    question: "How do I add assets to my portfolio?",
    answer: "To add assets to your portfolio, use the Search page to find the stock or cryptocurrency you want to add. Once found, click on the asset to view its details, then click 'Add to Portfolio' and select which portfolio you want to add it to.",
    category: "Portfolios"
  },
  {
    question: "What stocks can I track on StockCrypt?",
    answer: "StockCrypt supports thousands of stocks from major exchanges worldwide, including NYSE, NASDAQ, LSE, TSX, and more. You can track virtually any publicly traded company in these markets using our platform.",
    category: "Stocks"
  },
  {
    question: "How often is stock data updated?",
    answer: "Our stock data is updated in real-time during market hours. For most major exchanges, data is delayed by no more than 15 minutes. After market hours, data is updated at the close of the trading day.",
    category: "Stocks"
  },
  {
    question: "What cryptocurrencies are supported?",
    answer: "StockCrypt supports over 10,000 cryptocurrencies, including all major coins like Bitcoin, Ethereum, and Solana, as well as thousands of altcoins. Our crypto data is updated in real-time, 24/7.",
    category: "Cryptocurrencies"
  },
  {
    question: "How accurate are the crypto price predictions?",
    answer: "Our cryptocurrency predictions use advanced AI algorithms trained on historical data and market patterns. While they provide valuable insight, all predictions should be considered as just one factor in your investment decisions, not guaranteed outcomes.",
    category: "Cryptocurrencies"
  },
  {
    question: "Is my data secure on StockCrypt?",
    answer: "Absolutely. We employ industry-standard encryption protocols to protect your personal and financial data. We never store your banking information or crypto private keys. Our platform uses secure authentication methods and regular security audits to ensure your data remains safe.",
    category: "Security"
  },
  {
    question: "How can I cancel my premium subscription?",
    answer: "You can cancel your premium subscription at any time by going to your Profile page and navigating to the 'Billing' section. Select 'Cancel Subscription' and follow the prompts. Your premium features will remain active until the end of your current billing period.",
    category: "Billing"
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 14-day money-back guarantee for all new premium subscriptions. If you're not satisfied with our service within this period, contact our support team for a full refund. After 14 days, refunds are provided on a case-by-case basis.",
    category: "Billing"
  }
];

const FAQ = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HelpCircle className="h-12 w-12 text-dashboard-green" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about StockCrypt's features, accounts, and services
          </p>
        </div>
        
        {/* Search */}
        <div className="mb-10">
          <div className="flex gap-2 max-w-xl mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search for questions..." 
                className="pl-10"
              />
            </div>
            <Button type="submit">Search</Button>
          </div>
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqCategories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "bg-dashboard-green hover:bg-dashboard-green/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-gray-900 dark:text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {/* Didn't find your answer */}
        <div className="mt-12 bg-gray-50 dark:bg-dashboard-highlight/20 rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Didn't find what you're looking for?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-5">
            Our support team is always ready to help with any questions you may have.
          </p>
          <Button className="bg-dashboard-green hover:bg-dashboard-green/90 flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
