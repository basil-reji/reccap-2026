const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Reccap 2026",
    home: true,
  });
});

router.get("/about", function (req, res, next) {
  res.render("about", {
    title: "About | Reccap 2026",
    about: true,
  });
});

router.get("/venue", function (req, res, next) {
  res.render("venue", {
    title: "Venue | Reccap 2026",
    venue: true,
  });
});

router.get("/call-for-papers", function (req, res, next) {
  res.render("call-for-papers", {
    title: "Call for Papers | Reccap 2026",
    callForPapers: true,
  });
});

router.get("/important-dates", function (req, res, next) {
  res.render("important-dates", {
    title: "Important Dates | Reccap 2026",
    importantDates: true,
  });
});

router.get("/committee", function (req, res, next) {
  res.render("committee", {
    title: "Organizing Committee | Reccap 2026",
    committee: true,
  });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", {
    title: "Contact Us | Reccap 2026",
    contact: true,
  });
});

router.get("/registration-fees", function (req, res, next) {
  res.render("registration-fees", {
    title: "Registration Fees | Reccap 2026",
    registrationFees: true,
  });
});

router.get("/author-information", function (req, res, next) {
  res.render("author-information", {
    title: "Author Information | Reccap 2026",
    authorInformation: true,
  });
});

module.exports = router;
