'use client';

import { useState, useEffect, useMemo } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ListFilter, Search as SearchIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Asset = {
  name: string;
  ticker: string;
  market: string;
  logo_url?: string;
  icon_url?: string;
  description?: string;
  // optional fields returned from other endpoints
  price?: number;
  change_pct?: number;
};

const SearchOnlyPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState<'name' | 'price:high' | 'price:low' | 'change:high' | 'change:low'>('name');

  /* ──────────────────────────────────────────────────────────
     Fetch 5‑per‑market on first render
  ────────────────────────────────────────────────────────── */
  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async (query?: string) => {
    try {
      setLoading(true);
      const endpoint = query
        ? `http://localhost:4000/api/search?q=${encodeURIComponent(query)}`
        : 'http://localhost:4000/api/samples';

      const res  = await fetch(endpoint);
      const data = await res.json();
      setAssets(data);
    } catch (err) {
      console.error('Error fetching assets:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchAssets(searchTerm.trim());
  };

  /* ──────────────────────────────────────────────────────────
     Memo‑sorted list (client side)
  ────────────────────────────────────────────────────────── */
  const sortedAssets = useMemo(() => {
    switch (sortBy) {
      case 'name':
        return [...assets].sort((a, b) => a.name.localeCompare(b.name));
      case 'price:high':
        return [...assets].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
      case 'price:low':
        return [...assets].sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
      case 'change:high':
        return [...assets].sort((a, b) => (b.change_pct ?? 0) - (a.change_pct ?? 0));
      case 'change:low':
        return [...assets].sort((a, b) => (a.change_pct ?? 0) - (b.change_pct ?? 0));
      default:
        return assets;
    }
  }, [assets, sortBy]);

  /* ────────────────────────────────────────────────────────── */

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Search Bar */}
        <Card>
          <CardContent className="p-4">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-grow">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  placeholder="Search by name or ticker symbol…"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Sort dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <ListFilter className="h-4 w-4" />
                    {{
                      name:        'Name (A‑Z)',
                      'price:high':  'Price ⭡',
                      'price:low':   'Price ⭣',
                      'change:high': 'Change ⭡',
                      'change:low':  'Change ⭣',
                    }[sortBy]}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  {['name','price:high','price:low','change:high','change:low'].map((k) => (
                    <DropdownMenuCheckboxItem
                      key={k}
                      checked={sortBy === k}
                      onCheckedChange={() => setSortBy(k as any)}
                    >
                      {{
                        name:        'Name (A‑Z)',
                        'price:high':  'Price ⭡',
                        'price:low':   'Price ⭣',
                        'change:high': 'Change ⭡',
                        'change:low':  'Change ⭣',
                      }[k as keyof typeof k]}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button type="submit">Search</Button>
            </form>
          </CardContent>
        </Card>

        {/* Asset grid */}
        {loading ? (
          <p className="text-center mt-8">Loading…</p>
        ) : sortedAssets.length === 0 ? (
          <p className="text-center mt-8 text-muted-foreground">No results.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedAssets.map((a) => (
              <Card key={a.ticker} className="shadow hover:shadow-lg transition">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    {a.logo_url || a.icon_url ? (
                      <img
                        src={a.logo_url || a.icon_url}
                        alt={a.name}
                        className="w-10 h-10 object-contain rounded"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded bg-gray-200 dark:bg-gray-700" />
                    )}
                    <div>
                      <h4 className="font-semibold leading-none">{a.name}</h4>
                      <p className="text-sm text-gray-500">
                        {a.ticker} • {a.market}
                      </p>
                    </div>
                  </div>

                  {a.description && (
                    <p className="text-sm mt-3 text-gray-600 dark:text-gray-400 line-clamp-3">
                      {a.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SearchOnlyPage;
