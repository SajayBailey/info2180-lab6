window.onload = function(){
  var button = document.getElementById("button");
  button.addEventListener("click",search);
  
  var allDef = document.getElementById("all");
  allDef.addEventListener("click",allSearch);
  
  var sch = new XMLHttpRequest();
  var result = document.getElementById("result")
  
  var myUrl = "https://info2180-lab6-sajaybailey.c9users.io/request.php/request.php?q=";
  
  
  //search when search button clicked.
  function search(){
    var searchVal = document.getElementById("lookup").value;
    
    //Check if text entered in textfield
    if(searchVal.length === 0){
      result.innerHTML = "Empty search!";
      
    }else{
      //alert("else");
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
  }
  
  //Search for all definitions.
  function allSearch(){
    result.innerHTML = "";
    sch.open("GET","https://info2180-lab6-sajaybailey.c9users.io/request.php/request.php?q=&all=true", true);
      sch.send();
      
      sch.onreadystatechange = function(){
        if (sch.readyState===4 && sch.status===200){
    			var xmlRes = sch.responseXML;
    			//alert(xmlRes);
    			
    			
    			//get definition (returns array of elements)
    			var def = xmlRes.getElementsByTagName("definition");
    			
    			//create ordered ist and list item
    			var list = document.createElement("ol");
    			
    			
    			
    			//iterate through definition tags and add to list.
    			for (var i =0; i<def.length; i++){
    			  
    			  //create tags
    			  var heading = document.createElement("h1");
    			  var desc = document.createElement("p");
    			  var auth = document.createElement("p");
    			  var item = document.createElement("li");
    			  
    			  //create texts for tags
    			  var text = document.createTextNode(def[i].childNodes[0].nodeValue);
    			  var h = document.createTextNode(def[i].attributes[0].value);
    			  var a = document.createTextNode('-'+def[i].attributes[1].value);
    			  
    			  ///add texts to tags
    			  heading.appendChild(h);
    			  desc.appendChild(text);
    			  auth.appendChild(a);
    			  
    			  //append tags to list item.
    			  item.appendChild(heading);
    			  item.appendChild(desc);
    			  item.appendChild(auth);
    			  
    			  list.appendChild(item);
    			  
    			}
    			
    			result.appendChild(list);
            
            
        }else{ 
          //Bleh.
        }
      }
  }
  
}