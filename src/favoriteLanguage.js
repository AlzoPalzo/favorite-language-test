const readline = require ('readline')

let username = ""

prompt = () =>
{
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.setPrompt("Enter a Github username: \n")
    rl.prompt()
    rl.on('line', name =>{
        username = name
        rl.close()
    }).on('close', () =>{
        process.exit(0)
    })
}
prompt()