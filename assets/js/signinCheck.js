function signincheck() {

  $.ajax({
      type: "GET",
      url: "/dashboard/SPW/SPW/SPW3/hyperspace/php/isSignedin.php",
    })
    .done(function (data, textStatus, jqXHR) {
      if (data !== "signedin") {
        alert("not signed in")
        window.location.href = "http://localhost/dashboard/SPW/SPW/SPW3/hyperspace/login.html"
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