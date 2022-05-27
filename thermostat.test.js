const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  it('Sets the default temperature to 20 degrees' , () => {
    const thermostat = new Thermostat;
    expect(thermostat.getTemperature()).toEqual(20);
  });

});