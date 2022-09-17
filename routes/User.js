const router = require("express").Router();

router.get("/", async (req, res, next) => {
  res.send("Hello world");
});

module.exports = router;
