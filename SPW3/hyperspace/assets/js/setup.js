
function buildersubmit(){

   
  
    var databasetype = document.getElementById("builder-db").value;
    
    var contactform = document.getElementById("builder-contact").value;
    
    var pcolour = document.getElementById("builder-pcolour").value;
   
    var scolour = document.getElementById("builder-scolour").value;
    
    alert(databasetype);

    $.ajax({
        type: "POST",
        url: "/dashboard/SPW/SPW/SPW3/hyperspace/php/setup.php",
        data: {"databasetype" : databasetype, "contactform" : contactform, "pcolour" : pcolour, "scolour" : scolour}
    })
    .done (function(data, textStatus, jqXHR) { 
      alert("Success: " + data); 
    })
    .fail (function(jqXHR, textStatus, errorThrown) { 
      alert("Error" + errorThrown + textStatus); 
    })
    .always (function(jqXHROrData, textStatus, jqXHROrErrorThrown) { 
      //alert("complete"); 
    });
    
}
    
    
document.getElementById("setupbutton").addEventListener("click", buildersubmit); 