
import { useState } from 'react';
import Layout from '@/components/layouts/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Calendar, User, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock blog posts
const blogPosts = [
  {
    id: 1,
    title: "Understanding Cryptocurrency Market Cycles",
    excerpt: "Learn about the four main phases of crypto market cycles and how to identify them to make better investment decisions.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2670&h=1500",
    date: "April 15, 2025",
    author: "Sarah Johnson",
    tags: ["Cryptocurrency", "Market Analysis", "Investment"]
  },
  {
    id: 2,
    title: "Top 5 Stock Screening Tools for Beginners",
    excerpt: "Discover the best tools to help you find potential stocks that match your investment criteria and strategy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2670&h=1500",
    date: "April 12, 2025",
    author: "Michael Chen",
    tags: ["Stocks", "Tools", "Beginners"]
  },
  {
    id: 3,
    title: "The Rise of Decentralized Finance (DeFi)",
    excerpt: "Explore how DeFi is revolutionizing traditional financial systems and creating new investment opportunities.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2532&h=1348",
    date: "April 10, 2025",
    author: "Alexis Rivera",
    tags: ["DeFi", "Blockchain", "Innovation"]
  },
  {
    id: 4,
    title: "How to Build a Diversified Portfolio",
    excerpt: "Learn the principles of diversification and how to apply them to reduce risk in your investment portfolio.",
    image: "https://images.unsplash.com/photo-1586021280718-53fbadce3a34?auto=format&fit=crop&q=80&w=2574&h=1444",
    date: "April 8, 2025",
    author: "David Thompson",
    tags: ["Portfolio Management", "Diversification", "Risk Management"]
  },
  {
    id: 5,
    title: "Technical Analysis for Cryptocurrency Trading",
    excerpt: "Master the basics of technical analysis to identify potential entry and exit points in the crypto market.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2670&h=1500",
    date: "April 5, 2025",
    author: "Emma Wilson",
    tags: ["Technical Analysis", "Trading", "Cryptocurrency"]
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      setFilteredPosts(blogPosts);
      return;
    }
    
    const filtered = blogPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    setFilteredPosts(filtered);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            StockCrypt Blog
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expert insights, market trends, and investment strategies
          </p>
        </div>
        
        {/* Search */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex gap-2 max-w-2xl mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button type="submit">Search</Button>
          </form>
        </div>
        
        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden h-96 mb-5">
              <img 
                src={filteredPosts[0].image} 
                alt={filteredPosts[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  {filteredPosts[0].tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-white/20 text-white border-white/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">{filteredPosts[0].title}</h2>
                <p className="text-white/90 mb-4">{filteredPosts[0].excerpt}</p>
                <div className="flex items-center text-white/80 text-sm">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{filteredPosts[0].author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{filteredPosts[0].date}</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map(post => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 dark:bg-dashboard-highlight text-gray-800 dark:text-gray-200">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 2 && (
                    <Badge variant="secondary" className="bg-gray-100 dark:bg-dashboard-highlight text-gray-800 dark:text-gray-200">
                      +{post.tags.length - 2}
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search terms or browse all our articles
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm('');
                setFilteredPosts(blogPosts);
              }}
            >
              View all articles
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Blog;
