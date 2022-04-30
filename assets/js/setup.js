function getToken() {

  $.ajax({
      type: "GET",
      url: "/SPW-Project/php/getToken.php",
    })
    .done(function (data, textStatus, jqXHR) {
      var tokenElement = document.getElementById("token")
      tokenElement.value = data;
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
        window.location.href='profile.html';
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

document.getElementById("setupbutton").addEventListener("click", buildersubmit);