const router = require("express").Router();
const {
  homeView,
  animalsView,
  editView,
  entryView,
  addAnimal,
} = require("../controllers/animal.controller");

// Home/Index
router.get("/", homeView);

// Animals
router.get("/all-animals", animalsView);

// Edit Animal
router.get("/edit-animal", editView);

// Entry Form
router.get("/entry-form", entryView);

router.post("/add-animal", addAnimal);

module.exports = router;
