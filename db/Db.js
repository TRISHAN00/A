const Ticket = require("../models/Ticket");

class MyDb {
  constructor() {
    this.ticket = [];
  }

  //   create ticket
  create() {}

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
