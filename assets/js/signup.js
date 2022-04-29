function phpSignup() {

  var uname = document.getElementById("signup_1").value;
  var name = document.getElementById("signup_2").value;
  var address = document.getElementById("signup_3").value;
  var pword = document.getElementById("signup_4").value;
  var passSymbols = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  if (!pword.match(passSymbols)) {
    alert("Password should be a minimum of 6 symbols and contain one small and one big alphabet symbol!");
    return false;
  }

  if (uname && name && address && pword !== "") {
    $.ajax({
        type: "POST",
        url: "/SPW-Project/php/hash.php",
        data: {
          "uname": uname,
          "pword": pword,
          "name": name,
          "address": address
        }
      })
      .done(function (data, textStatus, jqXHR) {
        alert("Success: " + data);
        if (data == "userexists") {
          alert("Username unavailable")
        } else {
          window.location.href = "http://localhost/SPW-Project/profile.html"
        }
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        alert("Error" + errorThrown + textStatus);
      })
      .always(function (jqXHROrData, textStatus, jqXHROrErrorThrown) {
        //alert("complete"); 
      });
  } else {
    alert("Please fill in all fields");
  }
}
document.getElementById("signupbutton").addEventListener("click", phpSignup);