const express = require("express");
const router = express.Router();
const db = require("../models")

router.get("/thing", (req, res) => {
    db.Thing.findAll().then(allThings => {
        res.render("all-things", {allThings: allThings});
    })
    
})

router.get("/thing/new", (req, res) => {
  
    res.render("new-thing");
})

router.get("/thing/:id", (req, res) => {
    db.Thing.findOne({
        where: {
            id: req.params.id,
        }
    }).then(foundThing => {
        console.log(foundThing)
        res.render("single-thing", {
            name: foundThing.name,
            price: foundThing.price
        });
    })
    
})

router.get("/thing/:id/edit", (req, res) => {
    res.render("edit-thing");
})

router.post("/api/thing", (req, res) => {
    db.Thing.create(req.body).then(newThing => {
        res.json({
            error: false,
            data: newThing,
            message: "Created new thing."
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: true,
            data: null,
            message: "Unable to create new thing."
        })
    })
})



module.exports = router;