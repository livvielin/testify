/* globals casper, document */
casper.test.begin('App is setup correctly', 2, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    test.assertExists('.todo-list', 'List should exist');
    test.assertExists('.todo-form', 'Form should exist');
  });

  casper.run(function() {
    test.done();
  });
});

// Test that adds and removes todo items
casper.test.begin('Adds and removes todo items', 3, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    //
  });

  casper.run(function() {
    test.done();
  });
});

// Test that adds and removes multiple todo items
casper.test.begin('Adds and removes multiple todo items', 3, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    //
  });

  casper.run(function() {
    test.done();
  });
});

// Test that marks todo items as done
casper.test.begin('Marks todo items as done', 3, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    //
  });

  casper.run(function() {
    test.done();
  });
});

// Test that ensures user cannot add empty todo items
casper.test.begin('Ensures user cannot add empty todo items', 3, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    //
  });

  casper.run(function() {
    test.done();
  });
});
