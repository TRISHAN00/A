const myDB = require("../db/MyDB");
const router = require("express").Router();

router.get("/t/:ticketId", () => {});
router.patch("/t/:ticketId", () => {});
router.delete("/t/:ticketId", () => {});

router.get("/u/:username", () => {});
router.patch("/u/:username", () => {});
router.delete("/u/:username", () => {});

router.post("/sell", () => {
    
});
router.post("/bulk", () => {});
router.post("", () => {});

module.exports = router;
