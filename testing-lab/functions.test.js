const {returnTwo, greeting,add,multiply,divide,subtract}=require('./functions.js')


 test('make sure the function returntwo returns an integer of two',()=>{
    expect(returnTwo()).toBe(2)
  })

  describe('this test should check two names in greeting function',()=>{

  test('make sure the greeting function returns the passed in value of james',()=>{
    let nameParameter = 'James'
    expect(greeting(nameParameter)).toContain('James')
  })
  test('make sure the greeting function returns the passed in value of Jill',()=>{
    let nameParameter = 'Jill'
    expect(greeting(nameParameter)).toContain('Jill')
  })

})

describe('Math functions',()=>{
    test('checking add function with passed in parameters',()=>{
        expect(add(1, 2)).toBe(3),
        expect(add(5,5)).toBe(10)
    })
test('testing the multiply function with passed in values',()=>{
    expect(multiply(5,5)).toBe(25),
    expect(multiply(10,5)).toBe(50)
})
test('testing the divide function with passed in values',()=>{
    expect(divide(10,2)).toBe(5),
    expect(divide(100,10)).toBe(10)
})
test('testing the subtract function with passed in parameters',()=>{
    expect(subtract(10,5)).toBe(5),
    expect(subtract(100,50)).toBe(50)
})
})