const Ticket = require("../models/Ticket");

class MyDb {
  constructor() {
    this.ticket = [];
  }

  /**
   * Create Ticket
   * @param {string} username
   * @param {number} price
   */
  create(username, price) {
    const ticket = new Ticket();
  }

  //   sell multiple tickets
  bulkCreate() {}

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
