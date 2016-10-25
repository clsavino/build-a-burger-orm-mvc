/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
  console.log('\nroot route, burgers_controller.js');
  res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
  console.log("\nrouter.get('/burgers') in burgers controller");
  burger.selectAll(function (data) {
    console.log('\nburgers_controller.js cb');
    var hbsObject = { burgers: data };
    console.log("\nhandlebars object (burgers:data) hbsObject\n", hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers/insertOne', function (req, res) {
  burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, false], function () {
    res.redirect('/burgers');
  });
});

router.put('/burgers/updateOne/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  burger.updateOne({ devoured: req.body.devoured }, condition, function () {
    res.redirect('/burgers');
  });
});

router.delete('/burgers/delete/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;
  console.log('condition',condition);
  burger.delete(condition, function () {
    res.redirect('/burgers');
  });
});

module.exports = router;
