const { test, expect } = require('@jest/globals');
const Manager= require('../lib/Manager');
test('check manager object',()=>{
    const manager = new Manager('ayoub',10,'gmail');
    expect(manager.name).toBe('ayoub');
   
    expect(manager.getRole()).toEqual(expect.any(Object));
    
    
});
