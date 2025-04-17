
import { Calendar, ExternalLink } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface NewsCardProps {
  title: string;
  source: string;
  date: string;
  snippet: string;
  imageUrl?: string;
  url: string;
}

const NewsCard = ({
  title,
  source,
  date,
  snippet,
  imageUrl,
  url,
}: NewsCardProps) => {
  return (
    <Card className="overflow-hidden bg-white dark:bg-dashboard-card border-0 shadow-md hover:shadow-lg transition-shadow h-full">
      <CardHeader className="p-0">
        {imageUrl && (
          <div className="w-full h-40 overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
        )}
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
            {source}
          </span>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <Calendar size={12} className="mr-1" />
            {date}
          </div>
        </div>
        
        <h3 className="text-md font-semibold line-clamp-2 mb-2 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{snippet}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <a href={url} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant="outline" className="w-full text-xs flex items-center gap-1">
            Read Full Story
            <ExternalLink size={12} />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
