import { assert, expect } from "chai";
import {createRegexpUrl, createParams, setParams} from "../src/util"
describe("\"stacks\"", () => {
    it("should create a regexp url", ()=> {

        const reg = createRegexpUrl("/user/:id")

        expect(reg.toString()).to.be.equal(/^\/user\/\w+\/?$/.toString())
    })

    it("should regexp match with compatible url", ()=> {

        const reg = createRegexpUrl("/user/:id")
        assert(reg.test("/user/1"), "Regexp not matched")
    })

    it("should parse params from path", ()=> {

        const {id}= createParams("/user/:id")
        expect(id).to.be.eq(1)
    })

    it("should replace param values with actual value", ()=> {
        const params= createParams("/user/:id")
     
        const { id } = setParams("/user/15", params )
        expect(id).to.be.eq(15)
    })

    it("should be type avare", ()=> {
        const params= createParams("/user/:id")
        const { id } = setParams("/user/jdoe", params )
        assert(id === "jdoe", "id must be a string")
    })

})

