
function phpSignup(){
    var uname = document.getElementById("signup_1").value;

    var name = document.getElementById("signup_2").value;

    var address = document.getElementById("signup_3").value;

    var pword = document.getElementById("signup_4").value;

    $.ajax({
        type: "POST",
        url: "/dashboard/SPW/SPW/SPW3/hyperspace/php/hash.php",
        data: {"uname" : uname, "pword" : pword, "name" : name, "address" : address}
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
    
    
document.getElementById("signupbutton").addEventListener("click", phpSignup); 