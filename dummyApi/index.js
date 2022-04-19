const { Microp, MicropRouter } = require("../lib/index")
const os = require("os")


const PORT = process.env.PORT || 3000
const app = new Microp()


const fakehandler = async (req) => {
   
    return
}
 

//const userRouter = new MicropRouter()

app.use("/user", fakehandler)
app.use("/user", [fakehandler, request=> {

    return {
        body: {
            name: "jdoe"
        }
    }
}])

app.listen(3000)