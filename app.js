require("dotenv").config("./env")

const http = require("http");

//------ Variables Being used for Submission ------

//This is the Hard Coded Secrets.
const hostname = "127.0.0.1"
const port = 3000;

//Hard Coded Secret Example...
const secret = "Secret"

const fs = require("fs")
let directory_name= "./"
let filenames = fs.readdirSync(directory_name)



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    f = ""
    filenames.forEach((file) =>{
        f = f+file+" \n";
    })

    res.end(f)

});

console.log(secret);

server.listen(port, hostname, ()=>{})
