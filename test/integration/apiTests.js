describe('API integration', function(){
  var server, setupStub, JSONresponse;

  var fakeData = [
    {
      id: 1,
      name: 'Eat pie',
      done: false
    },
    {
      id: 2,
      name: 'Play soccer',
      done: false
    },
    {
      id: 3,
      name: 'Code',
      done: false
    }
  ];

  before(function () {
    server = sinon.fakeServer.create();
    setupStub = sinon.stub($, 'ajax').yieldTo('success', fakeData);
  });

  after(function () {
    server.restore();
    $.ajax.restore();
  });

  it('todo.setup receives an array of todos when todo.init is called', function () {
  });
});
