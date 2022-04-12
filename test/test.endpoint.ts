import { assert, expect } from "chai";
import {createRegexpUrl} from "../src/util"
describe("\"endpoints\"", () => {
    it("should create a regexp url", ()=> {

        const reg = createRegexpUrl("/user/:id")

        expect(reg.toString()).to.be.equal(/^\/user\/\w+\/?$/.toString())
    })

    it("shoul regexp match with compatible url", ()=> {

        const reg = createRegexpUrl("/user/:id")
        assert(reg.test("/user/1"), "Regexp not matched")
    })

})

