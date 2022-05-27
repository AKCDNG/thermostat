const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  it('Sets the default temperature to 20 degrees' , () => {
    const thermostat = new Thermostat;
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('Increases temperature by 1 degree when .up() is called', () => {
    const thermostat = new Thermostat;
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('Decreases temperature by 1 degree when .down() is called', () => {
    const thermostat = new Thermostat;
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  })

it('Has a minimum temperature of 10 degrees', () => {
  const thermostat = new Thermostat;
  for(let i = 0 ; i < 10 ; i++) {
    thermostat.down();
  }
  expect(thermostat.down()).toEqual('Minimum temperature reached');
  
});

});