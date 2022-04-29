function tablebuilds() {

  $.ajax({
      type: "GET",
      url: "/SPW-Project/php/buildLoad.php",
    })
    .done(function (data, textStatus, jqXHR) {
      //alert("Success: " + data); 
      var datajson = JSON.parse(data);
      var length = datajson.length;

      for (let i = 0; i < datajson.length; i++) {
        var table = document.getElementById("buildtable");
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);

        row.insertCell(0).innerHTML = datajson[i].username;
        row.insertCell(1).innerHTML = datajson[i].databasetype;
        row.insertCell(2).innerHTML = datajson[i].contactform;
        row.insertCell(3).innerHTML = datajson[i].pcolour;
        row.insertCell(4).innerHTML = datajson[i].scolour;
      }
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      alert("Error" + errorThrown + textStatus);
    })
    .always(function (jqXHROrData, textStatus, jqXHROrErrorThrown) {
      //alert("complete"); 
    });
}

function admincheck() {

  $.ajax({
      type: "GET",
      url: "/SPW-Project/php/admin.php",
    })
    .done(function (data, textStatus, jqXHR) {
      if (data === "admin") {
        window.location.href = "http://localhost/SPW-Project/adminprofile.html"
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

//window.addEventListener("load", admincheck());
//window.addEventListener("load", tablebuilds());

document.getElementById("profilelogout").addEventListener("click", logoutTest);
//document.getElementById("profilebutton").addEventListener("click", update); 