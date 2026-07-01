const sumPrimes = require('./sumAllPrimes')

test('Sum All Primes', async () => {
    expect(sumPrimes(10)).toEqual(17)
})

test('Sum All Primes', async () => {
    expect(sumPrimes(977)).toEqual(73156)
})