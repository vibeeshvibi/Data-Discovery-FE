import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8080;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all routes by serving the index.html file (SPA fallback)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at:`);
  console.log(`- Local: http://localhost:${port}`);
  console.log(`- Network: http://0.0.0.0:${port}`);
  console.log(`- Find your IP: Use 'ipconfig getifaddr en0' on macOS or 'hostname -I' on Linux`);
});
