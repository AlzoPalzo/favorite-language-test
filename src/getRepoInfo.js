const https = require('https')

const URL  = "api.github.com"
let repos = []

getRepos = async (userName) => {
    let options = {
        host: URL,
        path: `/users/${userName}/repos?sort=created&per_page=50`,
        headers: {'user-agent': 'node.js'}
    }
    https.get(options, resp => {
        resp.setEncoding("utf8");
        let body = "";
        resp.on("data", data => {
            body += data
        })
        resp.on("end", () =>{
            body = JSON.parse(body)
            repos = body.map(repo => {
                return repo.language
            })
            console.log(repos)
        }).on("error", (err)=>{
            return err
        })
    })
}

getRepos("alzopalzo")

console.log(repos)