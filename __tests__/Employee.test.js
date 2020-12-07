const {jest: requiredJest} = require('@jest/globals');
const Employee = require('../lib/Employee');



test('check employee name, Email, Id',() =>{
    const employee= new Employee('ayoub',10,"ayoub@gmail")
    
    expect(employee.name).toBe('ayoub');
    expect(employee.email).toBe("ayoub@gmail");
    expect(employee.id).toEqual(expect.any(Number));
    
});