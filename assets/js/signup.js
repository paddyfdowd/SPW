function phpSignup() {

  var uname = document.getElementById("signup_1").value;
  var name = document.getElementById("signup_2").value;
  var address = document.getElementById("signup_3").value;
  var pword = document.getElementById("signup_4").value;
  var passSymbols = /^.{8,64}$/;

  if (!pword.match(passSymbols)) {
    new Toast({
      message: 'Password should be a minimum of 8 symbols and a maximum of 64 symbols!',
      type: 'warning'
    });
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
        if (data == "userexists") {
          new Toast({
            message: 'Please select another username to proceed!',
            type: 'warning'
          });
        } else {
          window.location.href = "http://localhost/SPW-Project/profile.html"
        }
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        new Toast({
          message: 'Something went wrong. Try again!',
          type: 'danger'
        });
      })
      .always(function (jqXHROrData, textStatus, jqXHROrErrorThrown) {
        //alert("complete"); 
      });
  } else {
    new Toast({
      message: 'Some of the fields are empty. Try again!',
      type: 'warning'
    });
  }
}
document.getElementById("signupbutton").addEventListener("click", phpSignup);