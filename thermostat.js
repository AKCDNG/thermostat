class Thermostat {
  constructor() {
    this.temperature = 20
    this.powerSavingMode = true
  }

  getTemperature() {
    return this.temperature
  }

  up() {
    if(this.powerSavingMode === true && this.temperature < 25) {
      this.temperature += 1;
    } else if(this.powerSavingMode === false && this.temperature < 32) {
      this.temperature += 1;
    } else {
      return 'Maximum temperature reached';
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
    } else if(this.powerSavingMode === false && input === true) {
      this.powerSavingMode = input;
      return 'PSM is now on, max temperature is 25';
    } else if(this.powerSavingMode === true && input === false) {
      this.powerSavingMode = input
      return 'PSM is now off, max temperature is 32';
    }
    else {
      this.powerSavingMode = input;
    }
  }

  reset() {
    this.temperature = 20
  }

  currentEnergyUsage() {
    if(this.temperature < 18){
      return 'low-usage';
    } else if(this.temperature >= 18 && this.temperature <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
}


module.exports = Thermostat