const express = require("express");

const fileRoutes = require("./routes/file.routes");

const app = express();

app.use(express.json()); // middleware
app.use(express.urlencoded());


app.use(fileRoutes);

app.listen(8080, () => console.log('server is up & running at port 8080'))