function submitReview(){
  
  var message = document.getElementById("reviewmessage").value;
  var score = document.getElementById("reviewscore").value;
  
     $.ajax({
        type: "POST",
        url: "/dashboard/SPW/SPW/SPW3/hyperspace/php/reviews.php",
        data: {"reviewbody" : message, "score" : score}
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


document.getElementById("reviewsubmit").addEventListener("click", submitReview); 