const readline = require ('readline')
const fetch = require('node-fetch')

const URL  = "api.github.com"


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
        const options = {headers: {'user-agent': 'node.js'}}
        fetch ("https://api.github.com" + "/users/" + userName + "/repos", options)
        .then(resp => resp.json())
        .then(repos => {
            if (repos.message && repos.message === "Not Found") {
                console.log("User not found")
                prompt()
            }
        })
    } catch (error) {
        console.log(error)
    }
}
prompt()