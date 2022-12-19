const express = require("express")
const path  = require("path")
const port = 3333

let inicialPath = path.join(__dirname, "public")

let app = express()
app.use(express.static(inicialPath))

app.get("/", (req, res)=>{res.sendFile(path.join(inicialPath, "index.html"))})

app.listen(port, ()=>{
    console.log(`Server start up on port ${port}!`)
})

