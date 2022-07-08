var matchers = require('./Matchers');
// To Check for toBetruthy and toBefalsy();
describe("Matchers Suite",()=>{
    //To Check for Equal to 
    test('Check for Object Equality',()=>{
        let tempObj = {"id":102,"Name":"Sujit","Dep":"CS","Designation":"Full Stack Development"};
        expect(matchers.returnObject()).toEqual(tempObj);
    })
    //To Check for not to be Null
    test('Check Not to be Null for Employee Object',()=>{
        expect(matchers.returnObject()).not.toBeNull();
    })
    test('Validate toBeTruthy() and toBeFalsy()',()=>{
        //Expects true with toBeTruthy
        bData = true;
        expect(bData).toBeTruthy();
        
        //Expects false with toBeTruthy
        bData == false;
        //expect(bData).toBeFalsy();

        //toBeTruthy() for an object expects that object points to some Memory Location
        let empObj = matchers.returnObject();
        expect (empObj).toBeTruthy
        
        //toBeFalsy() for an object, Expects object to be null Object
        empObj = null;
        expect(empObj).toBeFalsy();
    })
})