function submitMessage() {

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name && email && message != "") {

    $.ajax({
        type: "POST",
        url: "/SPW-Project/php/submitMessage.php",
        data: {
          "message": message,
          "name": name,
          "email": email
        }
      })
      .done(function (data, textStatus, jqXHR) {
        if (data == "invalid") {
          new Toast({
            message: 'Please type a valid e-mail address!',
            type: 'warning'
          });
        } else {
          window.location.href = "http://localhost/SPW-Project/index.html";
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

document.getElementById("messagesubmit").addEventListener("click", submitMessage);