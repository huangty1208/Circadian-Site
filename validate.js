document.getElementById("textForm").onsubmit = validate;
  function validate ()
  {
    var elt = document.getElementById("textForm");
    var name = elt.userName.value;
    var psw1 = elt.psw.value;
    var psw2 = elt.pswCon.value;


    if (name == "")
    {
      window.alert ("Enter name");
      return false;
    }


    if (psw1 == "")
    {
      window.alert ("Enter password");
      return false;
    }

    if (psw2 == "")
    {
      window.alert ("Enter password confirm");
      return false;
    }

    
    if (name.length < 6 || name.length > 10)
    {
      window.alert ("Invalid Input");
      return false;
    }

    if (name[0] < "A" || (name[0] > "Z" && name[0] < "a") || name[0] > "z")
    {
      window.alert ("Invalid Input");
      return false;
    }

    for(var i in name){
    var x = name.charAt(i);
    if((x < "0") || (x > "9" && x < "A") || (x > "Z" && x < "a") || (x > "z")){
      window.alert ("Invalid Input");
      return false;
    } 
    }
    
    if (psw1 != psw2)
    {
      window.alert ("Invalid Input");
      return false;
    }   

    if (psw1.length < 6 || psw1.length > 10)
    {
      window.alert ("Invalid Input");
      return false;
    }

    for(var i in psw1){
    var x = psw1.charAt(i);
    if(x < "0" || (x > "9" && x < "A") || (x > "Z" && x < "a" && x != "_") || x > "z"){
      window.alert ("Invalid Input");
      return false;
    } 
    }

    var numCount = 0;
    var lowerCount = 0;
    var upperCount = 0;

    for(var i in psw1){
    var x = psw1.charAt(i);

    if(x => "0" && x <= "9" ){
      numCount+=1;
    } 

    if(x => "a" && x <= "z" ){
      lowerCount+=1;
    } 

    if(x >= "A" && x <= "Z" ){
      upperCount+=1;
    } 
    }

    if (numCount==0 || lowerCount == 0 || upperCount == 0 ){
      window.alert ("Invalid Input");
      return false;
    }

    window.alert ("Passed Validation");
    return true;
  }