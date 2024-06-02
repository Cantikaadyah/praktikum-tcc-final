import express from 'express';
import cors from 'cors';
import SupplierRoute from './routes/SupplierRoute.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log('Hello world received a request.');

  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!`);
});
app.use(SupplierRoute);

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});