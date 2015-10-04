var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

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
    setupStub = sinon.stub(request, 'get').yieldTo(null, fakeData);
    server.respondWith(
      "GET",
      setupStub,
      [200, { "Content-Type": "application/json" }, JSON.stringify(fakeData)]
    );
  });

  after(function () {
    server.restore();
    request.get.restore();
  });

  it('todo.setup receives an array of todos when todo.init is called', function () {
  });
});
