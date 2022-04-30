function getToken() {

  $.ajax({
      type: "GET",
      url: "/SPW-Project/php/getToken.php",
    })
    .done(function (data, textStatus, jqXHR) {
      //alert("Success: " + data); 
      var tokenElement = document.getElementById("token")
      tokenElement.value = data;
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      alert("Error" + errorThrown + textStatus);
    })
    .always(function (jqXHROrData, textStatus, jqXHROrErrorThrown) {
      //alert("complete"); 
    });
}

function buildersubmit() {

  var databasetype = document.getElementById("builder-db").value;
  var contactform = document.getElementById("builder-contact").value;
  var pcolour = document.getElementById("builder-pcolour").value;
  var scolour = document.getElementById("builder-scolour").value;
  var token = document.getElementById("token").value;

  if (databasetype && contactform && pcolour && scolour != "") {
    $.ajax({
        type: "POST",
        url: "/SPW-Project/php/setup.php",
        data: {
          "databasetype": databasetype,
          "contactform": contactform,
          "pcolour": pcolour,
          "scolour": scolour,
          "token": token
        }
      })
      .done(function (data, textStatus, jqXHR) {
        //alert("Success: " + data);
        window.location.href='profile.html';
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        alert("Error" + errorThrown + textStatus);
      })
      .always(function (jqXHROrData, textStatus, jqXHROrErrorThrown) {
        //alert("complete"); 
      });
  } else {
    alert("Fill out all forms");
  }

}

document.getElementById("setupbutton").addEventListener("click", buildersubmit);