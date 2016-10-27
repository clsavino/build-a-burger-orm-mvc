/*
 a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var table = "burgers";
var burger = {
  selectAll: function (cb) {
    console.log('\nburger.selectAll in burger.js')
    orm.selectAll(table, function (res) {
      console.log('\nburger.js cb');
      cb(res);
    });
  },
  // cols and vals are arrays
  insertOne: function (cols, vals, cb) {
    orm.insertOne(table, cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne(table, objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete(table, condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;
