var findMissing = function (list) { 
    var delta1 = list[0] - list[1];
    var delta2 = list[1] - list[2];
    var delta  = Math.min(Math.abs(delta1), Math.abs(delta2));
    var direction = list[0] < list[1] ? 1 : -1;
    
    var start = list[0];
    
    for (var i = 0; i < list.length; i++, start += delta * direction) {
      if (list[i] !== start) return start;  
    }
  }