const Ticket = require("../models/Ticket");

class MyDb {
  constructor() {
    this.tickets = [];
  }

  /**
   * Create Ticket
   * @param {string} username
   * @param {number} price
   * @returns {Ticket} return a ticket object
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * Create multiple tickets for a single user
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @return {Array<Ticket>}
   */
  bulkCreate(username, price, quantity) {}

  //   return all tickets
  find() {}

  //   single ticket
  findById() {}

  // update ticket
  updateById() {}

  // delete ticket
  deleteById() {}

  //   raffle draw
  draw() {}
}

const myDb = new MyDb();
module.exports = myDb;
