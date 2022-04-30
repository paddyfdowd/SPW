function tableTest() {

  $.ajax({
      type: "GET",
      url: "/SPW-Project/php/reviewLoad.php",
    })
    .done(function (data, textStatus, jqXHR) {
      var datajson = JSON.parse(data);
      var length = datajson.length;

      for (let i = 0; i < datajson.length; i++) {
        var table = document.getElementById("reviewtable");
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);

        row.insertCell(0).innerHTML = datajson[i].reviewname;
        row.insertCell(1).innerHTML = datajson[i].reviewbody;
        row.insertCell(2).innerHTML = datajson[i].score;
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

window.addEventListener("load", tableTest());