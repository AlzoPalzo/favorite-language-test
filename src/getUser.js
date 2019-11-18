const readline = require ('readline')
const fetch = require('node-fetch')

const languagesChecker = require('./languagesChecker')

const URL  = "https://api.github.com/users/"
const params = "?per_page=50&sort=created" // check up to the 50 most recently created repositories by the user


prompt = () =>   // request github username
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

getRepos = (userName) =>{ // check if username is valid and then get the reopsitory information
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
                console.log("User not found. Please try again or press CTRL/CMD + c to exit.")
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