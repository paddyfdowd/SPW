function boop() {
  alert("Boop")
}

var message = "testString";
//document.getElementById("testbutton").addEventListener("click", boop); 
function phpTest() {
  $.ajax({
      type: "POST",
      url: "/dashboard/SPW/SPW/SPW3/hyperspace/php/test.php",
      data: {
        "message": message
      }
    })
    .done(function (data, textStatus, jqXHR) {
      alert("Success: " + data);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      alert("Error" + errorThrown + textStatus);
    })
    .always(function (jqXHROrData, textStatus, jqXHROrErrorThrown) {
      alert("complete");
    });
}

document.getElementById("testbutton").addEventListener("click", phpTest);