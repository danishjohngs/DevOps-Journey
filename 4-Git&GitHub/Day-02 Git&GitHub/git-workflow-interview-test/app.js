import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// In-memory demo data
let items = [
  { id: 1, name: 'Demo Item 1' },
  { id: 2, name: 'Demo Item 2' }
];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Demo API is running', endpoints: ['/api/items'] });
});

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const newItem = { id: Date.now(), name: req.body.name || 'Untitled' };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.delete('/api/items/:id', (req, res) => {
  const id = Number(req.params.id);
  items = items.filter((item) => item.id !== id);
  res.status(204).send();
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Demo server running at http://localhost:${PORT}`);
});

