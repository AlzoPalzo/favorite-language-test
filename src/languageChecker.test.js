const lc = require('./languagesChecker')

test('expects empty languages array to return to show no valid languages', () =>
{
    expect(lc.findFavorite([])).toBe(" has no recent repositories with a valid language")
})

test('expects only empty(null) reposistories to show no valid languages', () =>{
    expect(lc.findFavorite([null, null, null])).toBe(" has no recent repositories with a valid language")
})

test('Assumes that the users favorite language is the one they hsve used the most', () => {
    expect(lc.findFavorite(['Java', 'Rust', 'Rust', 'Rust', 'Rust', 'Javascript', 'Javascript', 'Javascript', ]))
})

test('will ignore the C language if another is available because no one really likes coding in C', () =>{
    expect(lc.findFavorite(['C', 'C', 'C', 'C', 'Java'])).toBe("'s favorite language is: Java")
})

test('Assumes python is the users favorite even if it isnt the most used, because it is the best', () =>{
    expect(lc.findFavorite(['Java', 'Javascript', 'Javascript', 'Javascript', 'Python'])).toBe("'s favorite language is: Python")
})