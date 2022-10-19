const shortid = require("shortid");
class Ticket {
  /**
   * Constructor Function
   * @param {string} username
   * @param {number} price
   */

  constructor(username, price) {
    this.id = shortid.generate();
    this.username = username;
    this.price = price;
    this.createAt = new Date();
    this.updateAt = new Date();
  }
}

module.exports = Ticket;
