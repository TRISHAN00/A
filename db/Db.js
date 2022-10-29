const Ticket = require("../models/Ticket");

class MyDD {
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
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity.length; i++) {
      const ticket = this.create(username, price);
      return ticket;
    }
    return result;
  }

  //   return all tickets
  find() {
    return this.tickets;
  }

  /**
   * single ticket
   * @param {string} ticketId
   */
  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       *
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === ticketId
    );

    return ticket;
  }

  // update ticket
  updateById() {}

  // delete ticket
  deleteById() {}

  //   raffle draw
  draw() {}
}

const myDb = new MyDb();
module.exports = myDb;
