

  document.getElementById("textForm").onsubmit = validate;
  function validate ()
  {
    var elt = document.getElementById("textForm");
    var v3 = elt.ans3;
    var v4 = elt.ans4;

    var v1 = elt.ans1.value;
    var v2 = elt.ans2.value;

    var v5 = elt.ans5.value;
    var v6 = elt.ans6.value;


    if (v1 == "")
    {
      window.alert ("Enter question 1");
      return false;
    }
    if (v2 == "")
    {
      window.alert ("Enter question 2");
      return false;
    }


    var v3count = 0;
    var val3 = 0; 

    for(var x=0 ; x<=3 ; x++) {
      if(v3[x].checked)
      {
      v3count += 1 ;
      val3 = v3[x].value;     
      }
    }

    if (v3count == 0){
      window.alert ("Enter question 3");
      return false;
    }

    if (v3count > 1){
      val3 = 0;
    }

    var v4count = 0;
    var val4 = 0; 

    for(var x=0 ; x<=3 ; x++) {
      if(v4[x].checked)
      {
      v4count += 1 ;
      val4 = v4[x].value;     
      }
    }

    if (v4count == 0){
      window.alert ("Enter question 4");
      return false;
    }

    if (v4count > 1){
      val4 = 0;
    }


    if (v5 == "")
    {
      window.alert ("Enter question 5");
      return false;
    }
    if (v6 == "")
    {
      window.alert ("Enter question 6");
      return false;
    }

    var val5 = v5.toLowerCase().trim();
    if (val5 == "galaxy")
    {
      val5 = 1;
    }
    else{
      val5 = 0;       
    }

    var val6 = v6.toLowerCase().trim();
    if (val6 == "age")
    {
      val6 = 1;
    }
    else{
      val6 = 0;       
    }

    v1 = eval(v1);
    v2 = eval(v2);
    val3 = eval(val3);
    val4 = eval(val4);

    var vtotal = v1+v2+val3+val4+val5+val6;

    window.alert ("our grade is " + vtotal+ "/6");
    return true;
  }