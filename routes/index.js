const express = require("express");
const router = express.Router();
const registrationGuidelinesPdf = encodeURI(
  "/V1-RECCAP 2026 Registration.pdf"
);
const cameraReadySubmissionPdf = encodeURI(
  "/V3_Reccap 2026  Camera Ready Submission.pdf"
);

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

router.get("/registration", function (req, res, next) {
  res.render("registration-fees", {
    title: "Registration | Reccap 2026",
    registration: true,
    registrationGuidelinesPdf,
  });
});

router.get("/registration-fees", function (req, res, next) {
  res.redirect("/registration");
});

router.get("/author-guidelines", function (req, res, next) {
  res.render("author-guidelines", {
    title: "Author Guidelines | Reccap 2026",
    authorGuidelines: true,
  });
});

router.get("/camera-ready-submission", function (req, res, next) {
  res.render("camera-ready-submission", {
    title: "Camera Ready Submission | Reccap 2026",
    cameraReadySubmission: true,
    cameraReadySubmissionPdf,
  });
});

module.exports = router;
