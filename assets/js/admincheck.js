function admincheck() {

  $.ajax({
      type: "GET",
      url: "/SPW-Project/php/admin.php",
    })
    .done(function (data, textStatus, jqXHR) {
      if (data !== "admin") {
        window.location.href = "http://localhost/SPW-Project/login.html"
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