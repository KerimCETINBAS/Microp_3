const { Microp } = require("../lib/index")
const os = require("os")

const PORT = process.env.PORT || 3000
const app = new Microp()

const hasFile = async (req) => {
    const body = !!Object.values(await req.body({multiples: true})).find(x => x.isFile == true)
    return {
        locals: { hasFile: body  }
    }
}

const handler = async (req) => {
    // promise yerine request bittikten sonra endpoint calisabilir
    if(await req.locals.hasFile) {
        console.log("hasFile")
    }
    else {
        console.log("noFile")
    }
    return {
        body: "test"
    }
}


app.use("/user/upload", [hasFile, handler])

app.delete(PORT, ()=> console.info(`Server listening on :::${PORT}`)) 

app.listen(3000)