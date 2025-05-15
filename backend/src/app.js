require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const counterRoutes = require('./routes/counter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/counter', counterRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});