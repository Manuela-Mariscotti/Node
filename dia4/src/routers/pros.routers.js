const {Router} = require("express");
const router = Router();
const prosCtrl = require ("../controller/pros.controller");

router.get("/pros", prosCtrl.getPros)

router.post("/pros", prosCtrl.postPros)

router.put("/pros", prosCtrl.putPros)

router.delete("/pros",prosCtrl.deletePros)

module.exports = router;