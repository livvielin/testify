describe('API integration', function(){
  var server, setupStub, JSONresponse;

  before(function () {
    server = sinon.fakeServer.create();
  });

  after(function () {
    server.restore();
  });

  it('todo.setup receives an array of todos when todo.init is called', function () {
  });
});
