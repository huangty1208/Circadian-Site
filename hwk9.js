
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
    z[j].innerHTML = "<span>"+a[j]+"</span>";

  }  
}

var trial = 0;
var actual = 0;
var totalcount = 0;
var id1 = "m";
var id2 = "n";
var idb1 = "j";
var idb2 ="k";


$(document).ready(function(){
    $("button").click(function(){

       if(totalcount == 0){
         trial +=1;
         totalcount +=1;
         idb1 = $(this).attr("id");
         id1 = $(this).children("span").text();


         $(this).children("span").fadeIn(3000,function(){
           if(id2 != id1){
             $(this).fadeOut("fast",function(){
             totalcount = 0;
             });
           }
         });

       }

       else if(totalcount == 1){
         totalcount +=1;
         idb2 = $(this).attr("id");
         id2 = $(this).children("span").text();


         $(this).children("span").fadeIn(3000,function(){
           if(id1 != id2 || idb1 == idb2){

               $(this).fadeOut("fast", function(){
                id1="m";
                id2="n";
                idb1 = "j";
                idb2 = "k";
                totalcount = 0;
               });
             
           }   
           else{
             actual+=1;
               if(actual ==8){
                 alert("Done! "+trial+ " trials ")
               }  
             totalcount = 0;
           }
         });

       }

       else{
         totalcount =0; 

       }       
    
    });
});
