const Manager = require('../lib/Manager');
 
test('creates an Manager object', () => {
    const manager = new Manager('Alejandro', 90, 'arobles@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Alejandro', 90, 'arobles@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 