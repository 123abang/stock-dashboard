import express from 'express';
import cors from 'cors';
import { rest } from './polygon.js';

const app  = express();
const port = 4000;
app.use(cors());

/* ---------- helpers ---------- */
async function topTickers(market, limit = 5) {
  const { results } = await rest.reference.tickers({
    market, active: true, limit, sort: 'ticker', order: 'asc',
  });
  return results;
}

async function enrichStockRows(rows) {
  // only stocks have branding; others we leave as‑is
  return Promise.all(
    rows.map(async (row) => {
      if (row.market !== 'stocks') return row;
      try {
        const { results } = await rest.reference.tickerDetails(row.ticker);
        return { ...row, ...results.branding };
      } catch {
        return row;            // fallback if details unavailable
      }
    }),
  );
}

/* ---------- routes ---------- */

/** GET /api/samples  →  5×(crypto|fx|indices|options|stocks) */
app.get('/api/samples', async (_, res) => {
  try {
    const [crypto, fx, indices, options, stocks] = await Promise.all([
      topTickers('crypto'),
      topTickers('fx'),
      topTickers('indices'),
      topTickers('options'),
      topTickers('stocks'),
    ]);

    const combined = [
      ...crypto, ...fx, ...indices, ...options, ...await enrichStockRows(stocks),
    ];
    res.json(combined);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch samples' });
  }
});

/** GET /api/search?q=XXX  →  cross‑market search (limit 5 per market) */
app.get('/api/search', async (req, res) => {
  const q = (req.query.q || '').trim();
  if (!q) return res.status(400).json({ error: 'Missing query param ?q=' });

  try {
    const markets = ['crypto', 'fx', 'indices', 'options', 'stocks'];

    const results = await Promise.all(
      markets.map(async (m) =>
        rest.reference.tickers({
          market: m, search: q, active: true, limit: 5,
        }).then(r => r.results),
      ),
    );

    // Flatten, then enrich stock rows for branding
    const flat     = results.flat();
    const enriched = await enrichStockRows(flat);
    res.json(enriched);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Search failed' });
  }
});

/** GET /api/ticker/:symbol  → full details for one ticker (optional) */
app.get('/api/ticker/:symbol', async (req, res) => {
  try {
    const { results } = await rest.reference.tickerDetails(req.params.symbol);
    res.json(results);
  } catch (err) {
    res.status(404).json({ error: 'Ticker not found' });
  }
});

app.listen(port, () =>
  console.log(`⬢  API running →  http://localhost:${port}`),
);
