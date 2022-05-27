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
    

  it('Has a maximum temperature of 25 degrees when Power Saving Mode is on', () => {
    const thermostat = new Thermostat;
    for(let i = 0 ; i < 5 ; i++) {
      thermostat.up(); 
    }
    expect(thermostat.up()).toEqual('Maximum temperature reached')
  });

  it('Has power saving mode on by default', () => {
    const thermostat = new Thermostat;
    expect(thermostat.setPowerSavingMode(true)).toEqual('Power Saving Mode is already on');
  });

  it('Goes to 27 degrees when Power Saving Mode is off', () => {
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false)
    for(let i = 0; i < 7; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(27)
  })

  it('Returns a message when PSM is turned off', () => {
    const thermostat = new Thermostat;
    expect(thermostat.setPowerSavingMode(false)).toEqual("PSM is now off, max temperature is 32")
  })

  it('Resets temperature to 20 when .reset is called', () => {
    const thermostat = new Thermostat;
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('Returns `low-usage` when less than 18 degrees', () => {
    const thermostat = new Thermostat;
    for(let i = 0; i < 3; i++) {
      thermostat.down();
    }
    expect(thermostat.currentEnergyUsage()).toEqual('low-usage');
  });

  it('Returns `medium-usage` when between 18 and 25 degrees', () => {
    const thermostat = new Thermostat;
    expect(thermostat.currentEnergyUsage()).toEqual('medium-usage');
  });

  it('Returns `high-usage` when above 25 degrees', () => {
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false)
    for(let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.currentEnergyUsage()).toEqual('high-usage');
  });


});