const lc = require('./languagesChecker')

test('expects empty languages array to return to show no valid languages', () =>
{
    expect(lc.findFavorite([]).message).toBe("User has no valid languages used")
})

test('expects only empty(null) reposistories to show no valid languages', () =>{
    expect(lc.findFavorite([null, null, null]).message).toBe("User has no valid languages used")
})