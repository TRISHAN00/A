const myDB = require("../db/MyDB");
const router = require("express").Router();

router.get("/t/:ticketId", () => {});
router.patch("/t/:ticketId", () => {});
router.delete("/t/:ticketId", () => {});

router.get("/u/:username", () => {});
router.patch("/u/:username", () => {});
router.delete("/u/:username", () => {});

router.post("/sell", (req, res) => {
  const { username, price } = req.body;
  const ticket = myDB.create(username, price);
  res.status(201).json({ message: "Ticket created successfully", ticket });
});
router.post("/bulk", (req, res) => {
  const { username, price } = req.body;
  const tickets = myDB.bulkCreate(username, price);
  res
    .status(201)
    .json({ message: "Bulk Ticket created successfully", tickets });
});
router.post("", () => {});

module.exports = router;
