
function phpSignup(){
    var uname = document.getElementById("signup_1").value;

    var pword = document.getElementById("signup_2").value;

    $.ajax({
        type: "POST",
        url: "/dashboard/SPW3/hyperspace/php/signup.php",
        data: {"uname" : uname, "pword" : pword}
    })
    .done (function(data, textStatus, jqXHR) { 
      alert("Success: " + data); 
    })
    .fail (function(jqXHR, textStatus, errorThrown) { 
      alert("Error" + errorThrown + textStatus); 
    })
    .always (function(jqXHROrData, textStatus, jqXHROrErrorThrown) { 
      alert("complete"); 
    });
    
    }
    
    
    document.getElementById("signupbutton").addEventListener("click", phpSignup); 