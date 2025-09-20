function isCircleSorted( arr ){
    var countSorted = 0;
    for(var i=0;i<arr.length;i++)
      if(arr[i] > arr[(i+1)%arr.length])
        countSorted++;
     return countSorted<=1;   
  }