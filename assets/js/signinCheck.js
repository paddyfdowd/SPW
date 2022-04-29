function signincheck() {

  $.ajax({
      type: "GET",
      url: "/SPW-Project/php/isSignedin.php",
    })
    .done(function (data, textStatus, jqXHR) {
      if (data !== "signedin") {
        alert("not signed in")
        window.location.href = "http://localhost/SPW-Project/login.html"
      } else {
        alert("signed in")
      }
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      alert("Error" + errorThrown + textStatus);
    })
    .always(function (jqXHROrData, textStatus, jqXHROrErrorThrown) {
      //alert("complete"); 
    });

}