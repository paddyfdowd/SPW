function admintablebuilds() {

  $.ajax({
      type: "GET",
      url: "/SPW-Project/php/adminbuildLoad.php",
    })
    .done(function (data, textStatus, jqXHR) {
      //alert("Success: " + data); 
      var datajson = JSON.parse(data);
      var length = datajson.length;

      for (let i = 0; i < datajson.length; i++) {
        var table = document.getElementById("adminbuildtable");
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);

        row.insertCell(0).innerHTML = datajson[i].username;
        row.insertCell(1).innerHTML = datajson[i].databasetype;
        row.insertCell(2).innerHTML = datajson[i].contactform;
        row.insertCell(3).innerHTML = datajson[i].pcolour;
        row.insertCell(4).innerHTML = datajson[i].scolour;

        var buttonCell = row.insertCell(5);
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

function logoutTest() {

  $.ajax({
      type: "GET",
      url: "/SPW-Project/php/logout.php",
    })
    .done(function (data, textStatus, jqXHR) {
      alert("Success: " + data);
      if (data === "sessionended") {
        window.location.href = "http://localhost/SPW-Project/login.html"
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
  alert(buildId);

  $.ajax({
      type: "POST",
      url: "/SPW-Project/php/deletebuild.php",
      data: {
        "buildId": buildId
      }
    })
    .done(function (data, textStatus, jqXHR) {
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

document.getElementById("profilelogout").addEventListener("click", logoutTest);