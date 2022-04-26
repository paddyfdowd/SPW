function logincheck(){
    
    $.ajax({
        type: "GET",
        url: "/dashboard/SPW/SPW/SPW3/hyperspace/php/auth.php",
        
    })
    .done (function(data, textStatus, jqXHR) { 
      if(data === "loggedin"){
        window.location.href = "http://localhost/dashboard/SPW/SPW/SPW3/hyperspace/profile.html"
      }
  
    })
    .fail (function(jqXHR, textStatus, errorThrown) { 
      alert("Error" + errorThrown + textStatus); 
    })
    .always (function(jqXHROrData, textStatus, jqXHROrErrorThrown) { 
      //alert("complete"); 
    });


}

function login(){
    var uname = document.getElementById("login_1").value;

    var pword = document.getElementById("login_2").value;

    $.ajax({
        type: "POST",
        url: "/dashboard/SPW/SPW/SPW3/hyperspace/php/login.php",
        data: {"uname" : uname, "pword" : pword}
    })
    .done (function(data, textStatus, jqXHR) { 
      alert("Success: " + data); 
      if (data === "Found Match"){
          window.location.href = "http://localhost/dashboard/SPW/SPW/SPW3/hyperspace/profile.html"
      }
    })
    .fail (function(jqXHR, textStatus, errorThrown) { 
      alert("Error" + errorThrown + textStatus); 
    })
    .always (function(jqXHROrData, textStatus, jqXHROrErrorThrown) { 
      //alert("complete"); 
    });
    
}

document.getElementById("loginbutton").addEventListener("click", login); 