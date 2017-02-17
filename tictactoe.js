var count = 0;

function reset(){

  count = 0;
  var z = document.getElementsByTagName("button") ;

  for (var j =0; j < z.length ; j++){
    z[j].innerHTML = "";
    z[j].style.backgroundColor = "Lavender";
  }  
}

function mOver(id){
 
  id.style.backgroundColor = "LawnGreen";

}

function mOut(id) {

  if(id.innerHTML == ""){

    id.style.backgroundColor = "Lavender";
  }
}


var x = new Array(9);
var win = "";

function check(){
  
  var z = document.getElementsByTagName("button") ;

  for (var j =0; j < z.length ; j++){
    x[j] = z[j].innerHTML;
  }  

  if(x[0]==x[1] && x[1]==x[2] && x[0] != ""){
    win = x[0];
    return true;
  }

  else if(x[3]==x[4] && x[4]==x[5] && x[3] != ""){
    win = x[3];
    return true;
  }

  else if(x[6]==x[7] && x[7]==x[8] && x[6] != ""){
    win = x[6];
    return true;
  }

  else if(x[0]==x[3] && x[3]==x[6] && x[0] != ""){
    win = x[0];
    return true;
  }

  else if(x[1]==x[4] && x[4]==x[7] && x[1] != ""){
    win = x[1];
    return true;
  }

  else if(x[2]==x[5] && x[5]==x[8] && x[2] != ""){
    win = x[2];
    return true;
  }

  else if(x[0]==x[4] && x[4]==x[8] && x[0] != ""){
    win = x[0];
    return true;
  }

  else if(x[2]==x[4] && x[4]==x[6] && x[2] != ""){
    win = x[2];
    return true;
  }

  else{
    return false;
  }

}


var count = 0;

function show(id){ 

  if(id.innerHTML ==""){

    if( count%2 == 0){
      id.innerHTML = "X";
      count+=1;
      if(check()){
        alert(win + " has won. ");
        reset();
      }

    }
    else{
      id.innerHTML = "O";
      count+=1;
      if(check()){
        alert(win + " has won. ");
        reset();
      }
    }
  }

 
}


