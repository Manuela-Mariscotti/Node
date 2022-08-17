const {Router} = require ("express");
const router = Router();
const userCtrl = require("../controller/user.controller")



router.get("/",userCtrl.getStart);

router.get("/usuario",userCtrl.getUser);

router.get("/usuario/:id",userCtrl.getUser);

router.post("/usuario",userCtrl.postUser);

router.put("/usuario",userCtrl.putUser);

router.delete("/usuario",userCtrl.deleteUser);







module.exports = router;