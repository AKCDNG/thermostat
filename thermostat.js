class Thermostat {
  constructor() {
    this.temperature = 20
    this.powerSavingMode = true
  }

  getTemperature() {
    return this.temperature
  }

  up() {
    if(this.powerSavingMode = true && this.temperature < 25) {
      this.temperature += 1;
    } else {
      return 'PSM is now on, max temperature is 25'
    }
  }

  down() {
    if(this.temperature > 10) {
      this.temperature -= 1;
    } else {
      return 'Minimum temperature reached';
    }
  }

  setPowerSavingMode(input) {
    if(this.powerSavingMode === true && input === true){
      return 'Power Saving Mode is already on';
    } else {
      this.powerSavingMode = input;
    }
  }
}

module.exports = Thermostat