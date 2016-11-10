window.onload = function(){
  var button = document.getElementById("button");
  button.addEventListener("click",search);
  
  var sch = new XMLHttpRequest();
  var result = document.getElementById("result")
  
  var myUrl = "https://info2180-lab6-sajaybailey.c9users.io/request.php/request.php?q=";
  //url = url + searchVal;
  
  
  function search(){
    var searchVal = document.getElementById("lookup").value;
    
    //Check if text entered in textfield
    if(searchVal.length === 0){
      result.innerHTML = "Empty search!";
      
    }else{
      
      var url = myUrl + searchVal;
      
      sch.open("GET",url, true);
      sch.send();
      
      sch.onreadystatechange = function(){
        if (sch.readyState===4 && sch.status===200){
          var response = sch.responseText;
          result.innerHTML = response;
          
		}else{
          result.innerHTML = "Ivalid search!";
         
        }
      }
    }
    
    
    
    //alert("test!");
  }
  
}