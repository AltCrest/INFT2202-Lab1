const { model } = require("mongoose");
const { Animal } = require("../model/Animal");

/**
 * get all animals, render page
 * @param {*} req
 * @param {*} res
 */
function loadAnimalData(req, res) {
  Animal.find({}).then(function (animalList) {
    res.render("./animals/all-animals", {
      pageTitle: "All Animals",
      animals: animalList,
    });
  });
}

/**
 * render home page
 * @param {*} req
 * @param {*} res
 */
exports.homeView = (req, res) => {
  res.render("./animals/home", {
    pageTitle: "Lab 4 - Home Page",
  });
};

/**
 * render all animals page
 * @param {*} req
 * @param {*} res
 */
exports.animalsView = (req, res) => {
  loadAnimalData(req, res);
};

/**
 * render edit animal page
 * @param {*} req
 * @param {*} res
 */
exports.editView = (req, res) => {
  res.render("./animals/edit-animal", {
    pageTitle: "Edit-Animal",
  });
};

/**
 * render enter animal page
 * @param {*} req
 * @param {*} res
 */
exports.entryView = (req, res) => {
  res.render("./animals/entry-form", {
    pageTitle: "Entry-Form",
  });
};

/**
 * handles add animal button
 * @param {*} req
 * @param {*} res
 */
exports.addAnimal = (req, res) => {
  console.log("clicked");
  try {
    // Create a new Animal object from the submitted form data
    const newAnimal = new Animal({
      zoo: req.body.zoo,
      scientificName: req.body.scientificName,
      commonName: req.body.commonName,
      givenName: req.body.givenName,
      gender: req.body.gender,
      dateOfBirth: req.body.dateOfBirth,
      age: req.body.age,
      isTransportable: req.body.isTransportable === "true" ? true : false,
    });

    // Save the new animal to the database
    newAnimal.save();

    // Redirect the user to the "All Animals" page
    loadAnimalData(req, res);
  } catch (error) {
    console.error("Error adding animal:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = exports;
