const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
const router = require('./src/routes');

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('hello!');
});

app.use('/tasks', router);

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
