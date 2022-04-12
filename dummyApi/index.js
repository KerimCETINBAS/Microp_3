const { Microp } = require("../lib/index")


const PORT = process.env.PORT || 3000

const app = new Microp()


app.use("user",()=>console.log("req"),()=>console.log("req"))

app.listen(PORT, ()=> console.info(`Server listening on :::${PORT}`)) 