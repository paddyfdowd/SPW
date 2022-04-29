function admincheck(){
    
  $.ajax({
      type: "GET",
      url: "/SPW-Project/php/admin.php",
      
  })
  .done (function(data, textStatus, jqXHR) { 
    if(data !== "admin"){
      
      window.location.href = "http://localhost/SPW-Project/login.html"
    }else{
      
    }

  })
  .fail (function(jqXHR, textStatus, errorThrown) { 
    alert("Error" + errorThrown + textStatus); 
  })
  .always (function(jqXHROrData, textStatus, jqXHROrErrorThrown) { 
    //alert("complete"); 
  });


}