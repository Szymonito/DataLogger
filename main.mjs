import readline from 'readline'
import fs from 'fs'

    const rl = readline.createInterface ({
        input: process.stdin,
        output: process.stdout
    })

    function userInfo(question){
        return new Promise (resolve => {
            resolve (answer)
        })
    }

    async function main() {
        try{
            const name = await userInfo ("Czesc, jak masz na imie?\n")
            const surename = await userInfo ("Podaj swoje naziwsko\n")
            const age = await userInfo ("Ile masz lat\n")


            const data = {
                name,
                surename,
                age
            }

            fs.writeFileSync('data.json')
            console.log ("Dane zostały zapisane w pliku json")

            const fileData = fs.readFileSync('data.json')
            const dataUser = JSON.parse(fileData)
            console.log (`Jestes ${dataUser.name} ${dataUser.surename} oraz masz ${dataUser.age} lat.`)
        }
    
    }