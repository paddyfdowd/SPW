function admincheck() {

  $.ajax({
      type: "GET",
      url: "/dashboard/SPW/SPW/SPW3/hyperspace/php/admin.php",
    })
    .done(function (data, textStatus, jqXHR) {
      if (data !== "admin") {
        window.location.href = "http://localhost/dashboard/SPW/SPW/SPW3/hyperspace/login.html"
      }
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      alert("Error" + errorThrown + textStatus);
    })
    .always(function (jqXHROrData, textStatus, jqXHROrErrorThrown) {
      //alert("complete"); 
    });

}