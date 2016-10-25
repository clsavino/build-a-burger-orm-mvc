/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var burger = {
  selectAll: function (cb) {
    console.log('\nburger.selectAll in burger.js')
    orm.selectAll('burgers', function (res) {
      console.log('\nburger.js cb');
      cb(res);
    });
  },
  // cols and vals are arrays
  insertOne: function (table, cols, vals, cb) {
    orm.insertOne(table, cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (table, objColVals, condition, cb) {
    orm.updateOne(table, objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (table, condition, cb) {
    orm.delete(table, condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;
