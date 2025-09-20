Array.prototype.square = function() {
    var squared = [];
    for (var i = 0; i < this.length; i++) {
      squared[i] = Math.pow(this[i], 2);
    }
    return squared;
  }
  
  Array.prototype.cube = function() {
    var cubed = [];
    for (var i = 0; i < this.length; i++) {
      cubed[i] = Math.pow(this[i], 3);
    }
    return cubed;
  }
  
  Array.prototype.sum = function() {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
      sum += this[i];
    }
    return sum;
  }
  
  Array.prototype.average = function() {
    if (this.length == 0) return NaN;
    return this.sum() / this.length;
  }