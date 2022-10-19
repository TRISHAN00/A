const Ticket = require("../models/Ticket");

class MyDb {
  constructor() {
    this.ticket = [];
  }

  //   return all tickets
  find() {}

  //   single ticket
  findById() {}

  // update ticket
  updateById() {}

  // delete ticket
  deleteById() {}
}

const myDb = new MyDb();
module.exports = myDb;
