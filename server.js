const express = require("express")
const dotenv  = require("dotenv").config()
const app = express()

port  = process.env.PORT

app.use("/api/contacts",  require("./routes/contactRoutes"))

app.listen(port,  ()=>{
  console.log(
    `Server is  running in  port  ${port}`
  )
})