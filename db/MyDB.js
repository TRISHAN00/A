const Ticket = require("../models/Ticket");

class MyDB {
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
    for (let i = 0; i < quantity; i++) {
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

  findByUsername(username) {
    const tickets = this.tickets.filter(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.username === username
    );
    return tickets;
  }

  /**
   * update ticket
   * @param {string} ticketId
   * @param {{username: string, price: number}} ticketBody
   * @return {Ticket}
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? this.username;
    ticket.price = ticketBody.price ?? this.price;
    ticket.updatedAt = new Date();

    return ticket;
  }

  /**
   * delete ticket
   * @param {string} ticketId
   */
  deleteById(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);

    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  //   raffle draw
  draw(winnerCount) {
    let winnerIndexes = new Array(winnerCount);

    let index = 0;

    while (index < winnerCount) {
      let winnerIndex = Math.floor(Math.random() * this.tickets.length);
      console.log("Winner Index", winnerIndex);

      if (!winnerIndexes.includes(winnerIndex)) {
        winnerIndexes[index++] = winnerIndex;
        continue;
      }
    }

    // for (let i = 0; i < indexes.length; i++) {
    //   let index = Math.floor(Math.random() * this.tickets.length);

    //   while (indexes.includes(index)) {
    //     let index = Math.floor(Math.random() * this.tickets.length);
    //   }
    //   indexes.push(index);
    // }
    const winners = winnerIndexes.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDB = new MyDB();
module.exports = myDB;
