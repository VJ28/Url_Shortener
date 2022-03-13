const express = require("express");

const {
  getShortenedUrl,
  getAllShortenedUrl
} = require("../controllers/shortUrl");

const router = express.Router();

router.get("/short", getShortenedUrl);
router.get("/allUrls", getAllShortenedUrl);

module.exports = router;