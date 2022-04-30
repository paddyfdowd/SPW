function submitReview() {

  var message = document.getElementById("reviewmessage").value;
  var score = document.getElementById("reviewscore").value;

  $.ajax({
      type: "POST",
      url: "/SPW-Project/php/reviews.php",
      data: {
        "reviewbody": message,
        "score": score
      }
    })
    .done(function (data, textStatus, jqXHR) {
      if (data == "notsignedin") {
        alert("Sign in to post review");
        window.location.href = "http://localhost/SPW-Project/login.html"
      }
      window.location.reload();
      alert("Success: " + data);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      alert("Error" + errorThrown + textStatus);
    })
    .always(function (jqXHROrData, textStatus, jqXHROrErrorThrown) {
      //alert("complete"); 
    });
}

document.getElementById("reviewsubmit").addEventListener("click", submitReview);