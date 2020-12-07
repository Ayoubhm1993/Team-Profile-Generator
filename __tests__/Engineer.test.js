const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');
test('Check Engineer Object',()=>{
    const engineer = new Engineer('github');
    expect(engineer.github).toBe('github');
    
})

