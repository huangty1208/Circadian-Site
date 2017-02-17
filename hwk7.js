
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function reset(){

  var alist = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
  var index =  Math.floor (Math.random() * alist.length);


  
  var a = shuffleArray(alist);

  var z = document.getElementsByTagName("button") ;

  for (var j =0; j < z.length ; j++){
    z[j].innerHTML = a[j];

  }  

}

