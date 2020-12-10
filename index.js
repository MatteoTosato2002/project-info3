const express = require("express")
const app = new express()
const port = 8090
app.use(express.static("./public"))
app.listen(port, () => console.log("server avviato sulla porta 8090"))