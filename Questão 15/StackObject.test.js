import StackObject from "./StackObject.js";

describe("Teste to StackObjkect class", () => {

    let stack = {};

    beforeEach(()=>{
        stack = new StackObject();
    });

    test("Test to push method",()=>{
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
        stack.push(2);
        stack.push(3);
        expect(stack.size()).toBe(3);
    });

});