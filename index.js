const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname))); // Serve static files (like HTML)

// Serve the main HTML file at the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Dummy endpoints for signup, login, etc.
app.post('/signup', (req, res) => {
  res.json({ message: 'Signup successful!' });
});

app.post('/verify-otp', (req, res) => {
  res.json({ message: 'OTP verified successfully!' });
});

app.post('/login', (req, res) => {
  res.json({ message: 'Login successful!' });
});

// Setup file upload with multer
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'File uploaded successfully!' });
});

// Endpoint to list uploaded files (stubbed for testing)
app.get('/files', (req, res) => {
  res.json(['example1.txt', 'example2.txt']); // Stubbed response for now
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
