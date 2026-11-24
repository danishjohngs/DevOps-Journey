const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON payloads
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Demo app is running!');
});

// Sample GET endpoint returning JSON
app.get('/api/items', (req, res) => {
  res.json([
    { id: 1, name: 'Demo Item 1' },
    { id: 2, name: 'Demo Item 2' }
  ]);
});

// Sample POST endpoint echoing received data
app.post('/api/items', (req, res) => {
  const newItem = { id: Date.now(), ...req.body };
  res.status(201).json(newItem);
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Demo server running at http://localhost:${PORT}`);
});

