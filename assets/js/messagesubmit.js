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
          alert("Invalid email");
        } else {
          alert("Thank you for yor message");
          window.location.href = "http://localhost/SPW-Project/index.html";
        }
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        alert("Error" + errorThrown + textStatus);
      })
      .always(function (jqXHROrData, textStatus, jqXHROrErrorThrown) {
        //alert("complete"); 
      });
  } else {
    alert("Enter all fields please")
  }
}

document.getElementById("messagesubmit").addEventListener("click", submitMessage);