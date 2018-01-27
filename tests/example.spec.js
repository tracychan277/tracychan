const double = require('./example')

describe('Double', function() {
  it('should double a number', function() {
    const ans = double(2)
    expect(ans).toBe(4)
  })

  it('should double a negative number', function() {
    const ans = double(-2)
    expect(ans).toBe(-4)
  })

  it('should throw an error when a non-number is supplied', function() {
    expect(function a() {
      double('a')
    }).toThrow()
  })
})