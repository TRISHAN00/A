const shortid = require("shortid");
class Ticket {
  constructor(username, price) {
    this.id = shortid.generate();
  }
}
