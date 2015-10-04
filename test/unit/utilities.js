var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){

    it('should have all the necessary methods', function(){
    });
  });
});

describe('the todo.util methods', function() {
  describe('trimTodoName', function(){
    it('should return a string', function(){
      var trimmed = todo.util.trimTodoName('Eat pie');
      assert.typeOf(trimmed, 'string');
    });

    it('should trim a todo name', function(){
      var trimmed = todo.util.trimTodoName('Eat pie ');
      trimmed.should.equal('Eat pie');
      trimmed.should.have.length(7);
    });
  });

  describe('isValidTodoName', function(){
    it('should return true when valid name given', function(){
      var isValid = todo.util.isValidTodoName('Eat pie');
      expect(isValid).to.equal(true);
    });

    it('should return false when invalid name given', function(){
      var isValid = todo.util.isValidTodoName('A ');
      expect(isValid).to.not.equal(true);
    });
  });

  describe('getUniqueId', function(){
    it('should', function(){
      var firstId = todo.util.getUniqueId();
      firstId.should.equal(1);
      var secondId = todo.util.getUniqueId();
      secondId.should.equal(2);
    });
  });
});
