const {sum,sub} = require("./app");

test('check equal' ,()=>{
    let total = sum(10,5);
    expect(total).toBe(15)
} ) ;

test('check sub' ,()=>{
    let total = sub(10,5)
    expect(total).toBe(5)

})