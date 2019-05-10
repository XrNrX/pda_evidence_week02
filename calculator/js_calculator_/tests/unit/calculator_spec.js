var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function() {
    assert.equal(true, true)
  })

  it('it should add numbers', function() {
    calculator.previousTotal = 4
    calculator.add(1)
    assert.equal(5, calculator.runningTotal)
  })

  it('it should subtract numbers', function() {
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })

  it('should be able to multiply', function() {
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
  })

  it('should be able to divide', function() {
    calculator.previousTotal = 21
    calculator.divide(3)
    assert.equal(7, calculator.runningTotal)
  })

  it('should be able to concatenate numbers', function() {
    calculator.previousTotal = 0
    calculator.numberClick(1)
    calculator.numberClick(1)
    calculator.numberClick(8)
    assert.equal(118, calculator.runningTotal)
  })

  it('should be able to chain multiple operations together', function() {
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.operatorClick('*')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(21, calculator.runningTotal)

  })

  it('should be able to clear the running total without affecting the calculation', function() {
    calculator.numberClick(10)
    calculator.operatorClick('*')
    calculator.numberClick(3)
    calculator.operatorClick('+')
    calculator.numberClick(20)
    calculator.clearClick()
    assert.equal('+', calculator.previousOperator)
    assert.equal(0, calculator.runningTotal)

  })



});
