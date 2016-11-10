window.onload = function(){
  var button = document.getElementById("button");
  button.addEventListener("click",search);
  
  var sch = new XMLHttpRequest();
  
  
  function search(){
    sch.open("GET","https://info2180-lab6-sajaybailey.c9users.io/request.php/request.php?q=definition", true);
    sch.send();
    
    sch.onreadystatechange = function(){
      if (sch.readyState===4 && sch.status===200){
        var response = sch.responseText;
        alert(response);
      }else{
        alert("Checking...");
      }
    }
    
    //alert("test!");
  }
  
}