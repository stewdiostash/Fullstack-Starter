const express = require("express");
const router = express.Router();
const db = require("../models");

// VIEWS ROUTES

router.get("/thing", (req, res) => {
  db.Thing.findAll().then((allThings) => {
    res.render("all-things", { allThings: allThings });
  });
});

router.get("/thing/new", (req, res) => {
  res.render("new-thing");
});

router.get("/thing/:id", (req, res) => {
  res.render("single-thing");
});

router.get("/thing/:id/edit", (req, res) => {
  res.render("edit-thing");
});

// API ROUTERS

router.post("/api/thing", (req, res) => {
  db.Thing.create(req.body)
    .then((newThing) => {
      res.json({
        error: false,
        data: newThing,
        message: "Successfully sent new thing",
      });
    })
    .catch((err) => {
      console.log(500).json({
        error: true,
        data: null,
        message: "Unable to create new thing",
      });
    });
});

// Get route

// Get route

// Get route

// Get route

// Get route

module.exports = router;
