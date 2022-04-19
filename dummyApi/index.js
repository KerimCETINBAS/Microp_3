const { Microp, MicropRouter } = require("../lib/index")
const os = require("os")


const PORT = process.env.PORT || 3000
const app = new Microp()


const fakehandler = async (req) => {
   
    return
}
 

//const userRouter = new MicropRouter()

app.get("/user/:id", fakehandler)
app.get("/user/:id", [fakehandler, async  request=> {

    const {firstName, lastName } = await request.body()
    return {
        body: {
            fullname: firstName + " " + lastName
        }
    }
}])

app.listen(3000)