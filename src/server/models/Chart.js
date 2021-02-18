const names = require('../generators/names');

module.exports = class ChartList {
  constructor() {
    this.data = [];
  }

  pushRandomEntry(entry = new Chart()) {
    entry.randomize();
    this.data.push(entry);
  }
}

class Chart {
  constructor() {
    this.name = '';
    this.uv = 0;
    this.pv = 0;
    this.amt = 0;
  }

  randomize() {
    Object.entries(this).forEach(entry => {
      var entryValueType = typeof(this[entry[0]]);
      if (entryValueType === 'number') this[entry[0]] = Math.random()*1000;
      else if (entryValueType === 'string') this[entry[0]] = names.getUniqueName();
      else entryValue = undefined
    });
  }
}