'use client';

import { useState, useEffect, useMemo } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
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
  price?: number;
  change_pct?: number;
};

const getAvatar = (asset: Asset) =>
  asset.logo_url ||
  asset.icon_url ||
  // fallback: coloured initials (ui‑avatars)
  `https://ui-avatars.com/api/?name=${asset.ticker}&background=random&rounded=true`;

export default function SearchOnlyPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState<'name' | 'price:high' | 'price:low' | 'change:high' | 'change:low'>('name');

  /* ─ fetch default list ─ */
  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async (q?: string) => {
    setLoading(true);
    try {
      const url = q
        ? `http://localhost:4000/api/search?q=${encodeURIComponent(q)}`
        : 'http://localhost:4000/api/samples';
      const data = await fetch(url).then(r => r.json());
      setAssets(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchAssets(searchTerm.trim());
  };

  const sorted = useMemo(() => {
    const sorters: Record<string, (a: Asset, b: Asset) => number> = {
      name: (a, b) => a.name.localeCompare(b.name),
      'price:high':  (a, b) => (b.price ?? 0) - (a.price ?? 0),
      'price:low':   (a, b) => (a.price ?? 0) - (b.price ?? 0),
      'change:high': (a, b) => (b.change_pct ?? 0) - (a.change_pct ?? 0),
      'change:low':  (a, b) => (a.change_pct ?? 0) - (b.change_pct ?? 0),
    };
    return [...assets].sort(sorters[sortBy]);
  }, [assets, sortBy]);

  /* ───────── detail drawer ───────── */
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Asset | null>(null);
  const [detailJson, setDetailJson] = useState<object | null>(null);

  const openDetails = async (asset: Asset) => {
    setSelected(asset);
    setOpen(true);
    try {
      const full = await fetch(`http://localhost:4000/api/ticker/${asset.ticker}`).then(r => r.json());
      setDetailJson(full);
    } catch {
      setDetailJson({ error: 'Unable to fetch details' });
    }
  };

  return (
    <DashboardLayout>
      {/* ─ search bar ─ */}
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

            {/* sort dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-1">
                  <ListFilter className="h-4 w-4" />
                  {{
                    name:        'Name',
                    'price:high': 'Price ⭡',
                    'price:low':  'Price ⭣',
                    'change:high':'Δ% ⭡',
                    'change:low': 'Δ% ⭣',
                  }[sortBy]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                {(['name','price:high','price:low','change:high','change:low'] as const).map(k => (
                  <DropdownMenuCheckboxItem
                    key={k}
                    checked={sortBy === k}
                    onCheckedChange={() => setSortBy(k)}
                  >
                    {{
                      name:        'Name',
                      'price:high': 'Price ⭡',
                      'price:low':  'Price ⭣',
                      'change:high':'Δ% ⭡',
                      'change:low': 'Δ% ⭣',
                    }[k]}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button type="submit">Search</Button>
          </form>
        </CardContent>
      </Card>

      {/* ─ results grid ─ */}
      {loading ? (
        <p className="text-center mt-8">Loading…</p>
      ) : sorted.length === 0 ? (
        <p className="text-center mt-8 text-muted-foreground">No results.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {sorted.map((a) => (
            <Card
              key={a.ticker}
              onClick={() => openDetails(a)}
              className="cursor-pointer transition hover:shadow-lg"
            >
              <CardContent className="p-4 flex items-center gap-4">
                <img src={getAvatar(a)} alt={a.name} className="w-10 h-10 rounded object-contain" />
                <div>
                  <h4 className="font-medium leading-none">{a.name}</h4>
                  <p className="text-sm text-gray-500">
                    {a.ticker} • {a.market}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* ─ detail slide‑over ─ */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-xl overflow-y-auto max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>{selected?.name ?? 'Details'}</DialogTitle>
          </DialogHeader>
          {detailJson ? (
            <pre className="whitespace-pre-wrap text-sm mt-4">
              {JSON.stringify(detailJson, null, 2)}
            </pre>
          ) : (
            <p className="mt-4 text-sm">Loading details…</p>
          )}
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}
