var fl, ft;

var currentTime = 0;

function timer(){
  var t2 = new Date();
  var tSpent = t2.getTime() - currentTime;
  var sec = Math.floor(((tSpent%3600000)%60000)/1000);
  var min = Math.floor((tSpent%3600000)/60000);
  var hr = Math.floor(tSpent/3600000);
  document.timeform.name.value= " hours: " + hr + " minutes: "+ min + " seconds: " + sec ;

  var z1 = document.getElementsByTagName("img") ;

  var z2 = new Array (12); 
  var z3 = new Array (12); 
  var z4 = new Array (12);
  var z5 = new Array (12);
  var z6 = new Array (12);

  for (var j =0; j < (z1.length-1) ; j++){

    z2[j] = z1[j+1].src.substring(z1[j+1].src.search(/img/)+5,z1[j+1].src.search(/img/)+7).replace(".","");
    z3[j] = z1[j+1].getBoundingClientRect().left;
    z5[j] = z1[j+1].getBoundingClientRect().top;
  }

  for (var j =0; j < 12 ; j++){  
    z4[eval(z2[j])-1] = eval(z3[j]); 
    z6[eval(z2[j])-1] = eval(z5[j]);

  }

  var found = true;

  for (var j =0; j < 3 ; j++){ 
    if(z4[j+1]-z4[j] != 100 || z4[j+5]-z4[j+4] != 100 || z4[j+9]-z4[j+8] != 100){
      found = false;
      break;
    }  
    if(z6[j+1]-z6[j] != 0 || z6[j+5]-z6[j+4] != 0 || z6[j+9]-z6[j+8] != 0){
      found = false;
      break;
    }
  }

  if(found){
    document.getElementById("cap").innerHTML = "Congratulations! You got it";
    document.getElementById("cap").style.visibility = "visible";
  }
  else{
    document.getElementById("cap").innerHTML = "Better luck next time";
    document.getElementById("cap").style.visibility = "visible";    
  }

}


var rlist = [1,2,3,4,5,6,7,8,9,10,11,12] ;

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function returnList(){

  fl = document.getElementById("grid").getBoundingClientRect().left;
  ft = document.getElementById("grid").getBoundingClientRect().top;
  
  var t1 = new Date();
  currentTime = t1.getTime();
  
  var nlist = shuffleArray(rlist);
  var index =  Math.floor (Math.random() * 3) + 1;
  var z = document.getElementsByTagName("img") ;

  for (var j =0; j < (z.length-1) ; j++){

    z[j+1].src = "./images"+index+"/"+"img"+index+"-"+nlist[j]+".jpg";

  }

}


/*
 Define variables for the values computed by the grabber event 
 handler but needed by mover event handler
*/
var diffX, diffY, theElement;


// The event handler function for grabbing the word
function grabber(event) {

// Set the global variable for the element to be moved

  theElement = event.currentTarget;

// Determine the position of the word to be grabbed,
//  first removing the units from left and top

  var posX = parseInt(theElement.style.left);
  var posY = parseInt(theElement.style.top);

// Compute the difference between where it is and
// where the mouse click occurred

  diffX = event.clientX - posX;
  diffY = event.clientY - posY;

// Now register the event handlers for moving and
// dropping the word

  document.addEventListener("mousemove", mover, true);
  document.addEventListener("mouseup", dropper, true);

// Stop propagation of the event and stop any default
// browser action

  event.stopPropagation();
  event.preventDefault();

}  //** end of grabber

// *******************************************************

// The event handler function for moving the word

function mover(event) {
// Compute the new position, add the units, and move the word

  theElement.style.left = (event.clientX - diffX) + "px";
  theElement.style.top = (event.clientY - diffY) + "px";

// Prevent propagation of the event

  event.stopPropagation();
}  //** end of mover

// *********************************************************
// The event handler function for dropping the word

function dropper(event) {

  if (event.clientX >= fl  && event.clientX  < fl+100 ){

    if(event.clientY >= ft  && event.clientY < ft+100){
      theElement.style.left =  fl+"px";
      theElement.style.top = ft+"px";
    }

    else if(event.clientY >= ft +100  && event.clientY < ft+200){
      theElement.style.left =  fl+"px";
      theElement.style.top = ft+100+"px";
    }

    else if(event.clientY >= ft +200  && event.clientY < ft+300){
      theElement.style.left =  fl+"px";
      theElement.style.top = ft+200+"px";
    }

  }

  if (event.clientX >= fl+100  && event.clientX  < fl+200 ){

    if(event.clientY >= ft  && event.clientY < ft+100){
      theElement.style.left =  fl+100+"px";
      theElement.style.top = ft+"px";
    }

    else if(event.clientY >= ft +100  && event.clientY < ft+200){
      theElement.style.left =  fl+100+"px";
      theElement.style.top = ft+100+"px";
    }

    else if(event.clientY >= ft +200  && event.clientY < ft+300){
      theElement.style.left =  fl+100+"px";
      theElement.style.top = ft+200+"px";
    }

  }

  if (event.clientX >= fl+200  && event.clientX  < fl+300 ){

    if(event.clientY >= ft  && event.clientY < ft+100){
      theElement.style.left =  fl+200+"px";
      theElement.style.top = ft+"px";
    }

    else if(event.clientY >= ft +100  && event.clientY < ft+200){
      theElement.style.left =  fl+200+"px";
      theElement.style.top = ft+100+"px";
    }

    else if(event.clientY >= ft +200  && event.clientY < ft+300){
      theElement.style.left =  fl+200+"px";
      theElement.style.top = ft+200+"px";
    }

  }

  if (event.clientX >= fl+300  && event.clientX  < fl+400 ){

    if(event.clientY >= ft  && event.clientY < ft+100){
      theElement.style.left =  fl+300+"px";
      theElement.style.top = ft+"px";
    }

    else if(event.clientY >= ft +100  && event.clientY < ft+200){
      theElement.style.left =  fl+300+"px";
      theElement.style.top = ft+100+"px";
    }

    else if(event.clientY >= ft +200  && event.clientY < ft+300){
      theElement.style.left =  fl+300+"px";
      theElement.style.top = ft+200+"px";
    }

  }


// Unregister the event handlers for mouseup and mousemove

  document.removeEventListener("mouseup", dropper, true);
  document.removeEventListener("mousemove", mover, true);

// Prevent propagation of the event

  event.stopPropagation();
}  //** end of dropper
