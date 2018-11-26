const express = require('express');
const staticRouter = require('./routes/static');

const PORT = 3000;

const app = express();
app.use(staticRouter);

app.listen(PORT, () => {
  console.log(`App start to listen to port: ${PORT}`);
});
