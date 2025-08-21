
const express = require("express");
const Route = express.Router();
const healthCheckController = require("../controllers/healthcheck.js");

// const router = Route();
// router.Route("/").get( healthCheckController);

// module.exports = router;
Route.get("/", healthCheckController);
module.exports = Route;
