var assert = require('chai').assert;
var Griffin = require('../exercises/griffin');

describe('Griffin', function() {

  it('should be a function', function() {
    assert.isFunction(Griffin);
  });

  it('should instantiate our good friend, Griffin', function() {
    var griffin = new Griffin();

    assert.instanceOf(griffin, Griffin);
  });

  it('should have a name', function() {
    var griffin = new Griffin('Titus');

    assert.equal(griffin.name, 'Titus');
  });

  it('should be able to have a different name', function() {
    var griffin1 = new Griffin('Rex');
    var griffin2 = new Griffin('Bloo');

    assert.equal(griffin1.name, 'Rex');
    assert.equal(griffin2.name, 'Bloo');
  });

  it('should have wings by default', function() {
    var griffin1 = new Griffin('Charles');

    assert.equal(griffin1.name, 'Charles');
    assert.equal(griffin1.hasWings, true);
  });

  it('should be able to be wingless', function() {
    var griffin1 = new Griffin('Renee', false);

    assert.equal(griffin1.hasWings, false);
  });

  it('should be able to run', function() {
    var griffin1 = new Griffin('Harper', true);
    var griffin2 = new Griffin('Noel');
   
    assert.equal(griffin1.miles, 0);
    assert.equal(griffin2.miles, 0);

    griffin1.run();
    griffin2.run();

    assert.equal(griffin1.miles, 10);
    assert.equal(griffin1.isRunning, true);
    assert.equal(griffin2.miles, 10);
    assert.equal(griffin2.isRunning, true);
  });

  it('should run further the more it runs', function() {
    var griffin = new Griffin('Marco');

    griffin.run();
    griffin.run();
    griffin.run();
    griffin.run();

    assert(griffin.miles, 40);
  });

  it('should be able to fly', function() {
    var griffin1 = new Griffin('Zion');
    var griffin2 = new Griffin('Trent', false);
    
    griffin1.fly();
    griffin2.fly();

    assert.equal(griffin1.isFlying, true);
    assert.equal(griffin2.isFlying, false);
  });

  it('should travel further while flying', function() {
    var griffin1 = new Griffin('Carla');
    var griffin2 = new Griffin('Brody', false);

    griffin1.fly();
    griffin1.fly();
    griffin1.fly();
    griffin2.fly();

    assert.equal(griffin1.miles, 45);
    assert.equal(griffin2.miles, 0);
  });

  it('should be able to start flying while running', function() {
    var griffin = new Griffin('Carla');

    griffin.run();
    griffin.run();
    griffin.fly();

    assert.equal(griffin.isRunning, false);
    assert.equal(griffin.isFlying, true);
  });

  it('should not be able to start running while flying', function() {
    var griffin = new Griffin('Monte');

    griffin.fly();

    assert.equal(griffin.isFlying, true);
    assert.equal(griffin.run(), 'On what ground?!');
  });

  it('should guard the crown\'s wealth', function() {
    var griffin = new Griffin('Roland');

    var guard = griffin.guardWealth('Thief');

    assert.equal(guard, 'Don\'t even think about it, Thief!');
  });

  it('should let the king or queen access the wealth', function() {
    var griffin = new Griffin('Gerald');

    var guard1 = griffin.guardWealth('Thief');
    var guard2 = griffin.guardWealth('King');
    var guard3 = griffin.guardWealth('Queen');

    assert.equal(guard1, 'Don\'t even think about it, Thief!');
    assert.equal(guard2, 'Go ahead, my King.');
    assert.equal(guard3, 'Go ahead, my Queen.');
  });
});