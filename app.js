const express = require("express");
const indexRouter = require("./routers/indexRouter");

const app = express();

app.use(indexRouter);

//error middleware function
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).send(err.message);
})

const PORT = 8000;
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log("Server running on 8000");
})
