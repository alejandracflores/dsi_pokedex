const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
    console.log(req);
    res.send("Hello world!");
});

app.get("/pokemon", (req, res, next) => {
    res.json({ nombre: "Alejandra", edad: "19" })
});

app.listen(3000, () => {
    console.log("Server is running...");
});