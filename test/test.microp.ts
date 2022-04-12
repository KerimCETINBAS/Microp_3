import { assert, expect } from "chai";
import { exec } from "child_process";
import {Microp} from "../src"
const { spawn } = require('child_process');

describe("\"Microp app\"", () => {
    it("should be an instance of Microp", ()=> {
       const app = new Microp()
       expect(app).to.be.an.instanceof(Microp)
    })

    it("should be initialized with an empty constructor and must have default properties", ()=> {
        const app = new Microp({})

        expect(app.exposeOverTCP).to.equal(false)
    })

    it("should be initialize Microp app with options that must be overridden by the constructor", ()=> {

        const app = new Microp({ exposeOverTCP: true })
        expect(app.exposeOverTCP).to.equal(true)
    })

    it("Microp app methods must return instances of the app" , async ()=> {
  
       const app = new Microp({}).get( async ()=> {
          
            expect(app).to.instanceof(Microp)
            
        })
       
    })
    

})

