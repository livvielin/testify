var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('API integration', function(){
  var server, setupStub, JSONresponse;

  JSONresponse = [
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
    setupStub = sinon.stub(todo, "setup");
    server.respondWith(
      "GET",
      "http://localhost:3000/todos",
      [200, { "Content-Type": "application/json" }, JSON.stringify(JSONresponse)]
    );
  });

  after(function () {
    server.restore();
    todo.setup.restore();
  });

  it('todo.setup receives an array of todos when todo.init is called', function () {
    todo.init();
    server.respond();
    expect(setupStub.calledOnce);
    expect(setupStub.calledWith(JSONresponse));
  });
});
