const express = require("express");

const router = express.Router();

const Contact = require("../models/Contact");
const controllers = require("../controllers/contact.controllers");
console.log(controllers.deletecontact);
/** 
@desc test route
@path : '/test
@methode :GET
@data : no data
@acess : public

router.get("/test", (req, res) => {
  res.send("hello test");
});
*/
router.post("/", controllers.postContact);

router.get("/", controllers.getAllContact);

router.delete("/:id", controllers.deleteContact);

router.put("/:id", controllers.putContact);

module.exports = router;
