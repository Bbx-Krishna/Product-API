const express = require('express');

const app = express();

const port = 8001;
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./config/mongoose");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/", require("./routes/index"));
app.listen(port, (err) => {
    if(err){console.log(err);}
    console.log(`Server is running on port ${port}`);
});