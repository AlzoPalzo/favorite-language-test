const readline = require ('readline')
const fetch = require('node-fetch')

const languagesChecker = require('./languagesChecker')

const URL  = "https://api.github.com/users/"
const params = "?per_page=50&sort=created"


prompt = () =>
{
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.setPrompt("Enter a Github username: \n")
    rl.prompt()
    rl.on('line', name =>{
        getRepos(name)
        rl.close()
    })
}

getRepos = (userName) =>{
    try {
        const options = {
            headers: {
                'user-agent': 'node.js'
            }
        }
        fetch (URL + userName + "/repos" + params, options)
        .then(resp => resp.json())
        .then(repos => {
            if (repos.message && repos.message === "Not Found") {
                console.log("User not found. Please try again.")
                prompt()
            }
            else{
                const languages = repos.map(repo => repo.language)
                const result = languagesChecker.findFavorite(languages)
                console.log(userName + result)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

prompt()