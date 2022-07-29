const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send(" Cabana in root!"));

router.get("/booking", controllers.getBooking);

router.get("/cabana", controllers.getCabana);

router.post("/booking", controllers.createBooking);

router.post("/cabana", controllers.createCabana);

router.post("/booking", controllers.updateBooking);

router.post("/booking/:id", controllers.updateBooking);

router.delete("/booking/:id", controllers.deleteBooking);

module.exports = router;
