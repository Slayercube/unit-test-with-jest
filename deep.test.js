const {fromDollarToYen,fromYenToPound,fromEuroToDollar}= require('./app')

test('one euro should be 1.07 dollars',()=>{
    const dollarPrice = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745)
} )
test('one dollor should be 146.2616 yen', ()=>{

    const yenPrice = fromDollarToYen(10)
    const expected = 10 / 1.07 * 156.5 // = 1462.6168
    expect(fromDollarToYen(10)).toBe(1462.6168224299065)
})

test('one yen should be 0.0055 pound', ()=>{
    const poundPrice = fromYenToPound(10)
    const expected = 10 / 156.5 * 0.87 /// = 0.05559
    expect(fromYenToPound(10)).toBe(0.05559105431309904)
})

