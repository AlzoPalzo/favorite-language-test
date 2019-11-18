
removeNull = (languages) => { //remove empty repositories
    return languages.filter(language => language != null)
}

countLanguages = (languages) => {
    countedLanguages  = {}
    for (let i = 0; i < languages.length; i++) {
        let language = languages[i]
        if (countedLanguages[language]) {
            countedLanguages[language] += 1
        }
        else{
            countedLanguages[language] = 1
        }
    }
    return countedLanguages
}

extractFavorite = (countedLanguages) => {
    if(countedLanguages['C'] && Object.keys(countedLanguages).length > 1) {
        console.log("here")
        delete countedLanguages['C']
    }
    if(countedLanguages["Python"]){
        return "Python"
    }
    return Object.keys(countedLanguages).reduce((a,b) => countedLanguages[a] > countedLanguages [b] ? a : b)
}

exports.findFavorite = (languages) => {
    languages = removeNull(languages)
    if (languages.length < 1){
        return " has no recent repositories with a valid language"
    }
    countedLanguages = countLanguages(languages);
    let favorite = extractFavorite(countedLanguages)
    return `'s favorite language is: ${favorite}`
}