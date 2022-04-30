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
        window.location.href = "http://localhost/SPW-Project/login.html"
      }
      window.location.reload();
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

document.getElementById("reviewsubmit").addEventListener("click", submitReview);