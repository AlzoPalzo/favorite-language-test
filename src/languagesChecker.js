
removeNull = (languages) => {
    console.log(languages)
    return languages.filter(language => language != null)
}

exports.findFavorite = (languages) => {
    languages = removeNull(languages)
    if (languages.length < 1){
        return {message: "User has no valid languages used", favoriteLanguage: "false"}
    }
}