
const express = require("express")
const router  = express.Router()


router.route("/").get((req,res)=>{
  res.json(
    {
      "message":"message  is  massage."
    }
  )
})

module.exports  = router