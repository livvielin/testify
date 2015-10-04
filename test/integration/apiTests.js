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

  });
});

/*
stub unit test
describe("getTweets", function () {
    var fakeData = [
        { 
            created_at: "Fri Apr 05 19:39:30 +0000 2013", 
            text: "tweet 1", 
            retweeted: false, 
            favorited: false, 
            user: { name: "name 1" } 
        }, 
    ];

    before(function () {
        sinon.stub($, "ajax").yieldsTo("success", fakeData);
    });

    it("should $.ajax &amp; invoke callback", function (done) {
        twitter.getTweets("elijahmanor", function (tweets) {
            expect(tweets.length).to.be(5);
            done();
        });
    });

    after(function () { $.ajax.restore(); });
});

fake server unit test
describe("getTweets - Server", function () {
    var server, fakeData = [ ];

    before(function () {
        // Doesn’t work :( It’s JSONP!
        server = sinon.fakeServer.create();
        server.respondWith(
            "GET", 
            "https://api.twitter.com/.../elijahmanor.json?count=5",
            [200, { "Content-Type": "application/json" }, JSON.stringify(fakeData)]
        );
    });

    it("should $.ajax &amp; invoke callback", function (done) {
        twitter.getTweets("elijahmanor", function (tweets) {
            expect(tweets.length).to.be(5);
            done();
        }); server.respond();
    });

    after(function () { server.restore(); });
});

request unit test
var request    = require('request')
  , sinon      = require('sinon')
  , getProfile = require('./gh');

describe('User Profile', function(){
  before(function(done){
    sinon
      .stub(request, 'get')
      .yields(null, null, JSON.stringify({login: "bulkan"}));
    done();
  });

  after(function(done){
    request.get.restore();
    done();
  });

  it('can get user profile', function(done){
    getProfile('bulkan', function(err, result){
      if(err) return done(err);
      request.get.called.should.be.equal(true);
      result.should.not.be.empty;
      done();
    });
  });
});
*/
