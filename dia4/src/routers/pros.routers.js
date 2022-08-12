const {Router} = require("express");
const router = Router();
const prosCtrl = ("../controller/pros.controller");

router.get("/pros",prosCtrl.getPros)

module.exports = router;