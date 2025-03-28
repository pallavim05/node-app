const express = require('express');
const app = express();

// GET method
app.get('/get', (request, response) => {
  response.send('Data retrieved successfully...');
});

// POST method
app.post('/create', (request, response) => {
  response.send('Data created successfully...');
});

// PUT method
app.put('/update', (request, response) => {
  response.send('Data updated successfully...');
});

// DELETE method
app.delete('/delete', (request, response) => {
  response.send('Data deleted successfully...');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
