// Dependencies
const express = require("express");
const exphbrs = require("express-handlebars");
const db = require("./models");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars middleware
app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Route test
app.get("/", (req,res) => {
    res.render("index");
})

app.get("/api/config", (req,res) => {
    res.json({
        success: true,
    })
});

// Starts the server to begin listening
db.sequelize.sync().then(function() {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    });    
})

