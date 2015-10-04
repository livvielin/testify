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
casper.test.begin('Adds and removes todo items', 2, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    this.fill('.todo-form', {
      todo: 'Eat pie'
    }, true);

    // Check if the item was added to the list
    test.assertExists('.todo-list .todo-item', 'Item should exist after added');

    // Mark item as complete and remove
    this.click('.todo-remove');

    // Check that item no longer exists
    test.assertDoesntExist('.todo-list .todo-item', 'Item should not exist after removed');
  });

  casper.run(function() {
    test.done();
  });
});

// Test that adds and removes multiple todo items
casper.test.begin('Adds and removes multiple todo items', 2, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    this.fill('.todo-form', {
      todo: 'Eat pie'
    }, true);
    this.fill('.todo-form', {
      todo: 'Play soccer'
    }, true);
    this.fill('.todo-form', {
      todo: 'Code'
    }, true);

    // Check that all items were added to the list
    test.assertElementCount('.todo-list .todo-item', 3, 'Three items should have been added');

    // Mark items as complete and remove
    this.click('.todo-remove');
    this.click('.todo-remove');
    this.click('.todo-remove');

    // Check that there are no items left on the list
    test.assertElementCount('.todo-list .todo-item', 0, 'There should be no items left after removed');
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
