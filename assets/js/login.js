function logincheck() {

  $.ajax({
      type: "GET",
      url: "/SPW-Project/php/auth.php",
    })
    .done(function (data, textStatus, jqXHR) {
      if (data === "loggedin") {
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
}

function login() {

  var uname = document.getElementById("login_1").value;
  var pword = document.getElementById("login_2").value;
  var response = grecaptcha.getResponse();

  
  if (uname && response && pword !== "") {
    $.ajax({
        type: "POST",
        url: "/SPW-Project/php/login.php",
        data: {
          "uname": uname,
          "pword": pword,
          "response" : response
        }
      })
      .done(function (data, textStatus, jqXHR) {
        if (data == "no match") {
          new Toast({
            message: 'Wrong username or password. Try again!',
            type: 'danger'
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

document.getElementById("loginbutton").addEventListener("click", login);
