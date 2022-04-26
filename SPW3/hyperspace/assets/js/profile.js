function admincheck(){
    
  $.ajax({
      type: "GET",
      url: "/dashboard/SPW/SPW/SPW3/hyperspace/php/admin.php",
      
  })
  .done (function(data, textStatus, jqXHR) { 
    if(data === "admin"){
      window.location.href = "http://localhost/dashboard/SPW/SPW/SPW3/hyperspace/adminprofile.html"
    }

  })
  .fail (function(jqXHR, textStatus, errorThrown) { 
    alert("Error" + errorThrown + textStatus); 
  })
  .always (function(jqXHROrData, textStatus, jqXHROrErrorThrown) { 
    //alert("complete"); 
  });


}
function logoutTest(){

  $.ajax({
      type: "GET",
      url: "/dashboard/SPW/SPW/SPW3/hyperspace/php/logout.php",
      
  })
  .done (function(data, textStatus, jqXHR) { 
    alert("Success: " + data); 
    if(data === "sessionended"){
      window.location.href = "http://localhost/dashboard/SPW/SPW/SPW3/hyperspace/login.html"
    }

  })
  .fail (function(jqXHR, textStatus, errorThrown) { 
    alert("Error" + errorThrown + textStatus); 
  })
  .always (function(jqXHROrData, textStatus, jqXHROrErrorThrown) { 
    //alert("complete"); 
  });
  
}

document.getElementById("profilelogout").addEventListener("click", logoutTest); 
//document.getElementById("profilebutton").addEventListener("click", update); 