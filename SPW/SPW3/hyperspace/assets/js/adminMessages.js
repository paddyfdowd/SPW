function messagestablebuild() {

  $.ajax({
      type: "GET",
      url: "/SPW-Project/php/adminMessagesLoad.php",
    })
    .done(function (data, textStatus, jqXHR) {
      //alert("Success: " + data); 
      var datajson = JSON.parse(data);
      var length = datajson.length;

      for (let i = 0; i < datajson.length; i++) {
        var table = document.getElementById("adminmessagestable");
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);

        row.insertCell(0).innerHTML = datajson[i].name;
        row.insertCell(1).innerHTML = datajson[i].email;
        row.insertCell(2).innerHTML = datajson[i].message;
        row.insertCell(3).innerHTML = datajson[i].time;


        var buttonCell = row.insertCell(4);
        var btn = document.createElement("BUTTON");
        btn.id = datajson[i].id;
        btn.innerHTML = "Delete";
        btn.addEventListener("click", buttonPress);
        buttonCell.appendChild(btn);
      }
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      alert("Error" + errorThrown + textStatus);
    })
    .always(function (jqXHROrData, textStatus, jqXHROrErrorThrown) {
      //alert("complete"); 
    });
}

function buttonPress() {

  var buildId = event.srcElement.id;
  //alert(buildId);

  $.ajax({
      type: "POST",
      url: "/SPW-Project/php/deleteMessage.php",
      data: {
        "buildId": buildId
      }
    })
    .done(function (data, textStatus, jqXHR) {
      alert("Success: " + data);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      alert("Error" + errorThrown + textStatus);
    })
    .always(function (jqXHROrData, textStatus, jqXHROrErrorThrown) {
      //alert("complete"); 
    });
}