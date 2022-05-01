
var ids = [];

function messagestablebuild() {

  $.ajax({
      type: "GET",
      url: "/SPW-Project/php/adminMessagesLoad.php",
    })
    .done(function (data, textStatus, jqXHR) {
      var datajson = JSON.parse(data);
      var length = datajson.length;
      
      for (let i = 0; i < datajson.length; i++) {
        var table = document.getElementById("adminmessagestable");
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);

        ids = ids.concat(datajson[i].id);

        row.insertCell(0).innerHTML = datajson[i].name;
        row.insertCell(1).innerHTML = datajson[i].email;
        row.insertCell(2).innerHTML = datajson[i].message;
        row.insertCell(3).innerHTML = datajson[i].time;
        row.insertCell(4).innerHTML = datajson[i].markread;
        
        var boxId = "box" + datajson[i].id;
        var chkString = "<input type=\"checkbox\" id=\"" + boxId + "\"><label for=\"" + boxId + "\"></label><br></br>";
        
        row.insertCell(5).innerHTML = chkString;
        


        var buttonCell = row.insertCell(6);
        var btn = document.createElement("BUTTON");
        btn.id = datajson[i].id;
        btn.innerHTML = "Delete";
        btn.addEventListener("click", buttonPress);
        buttonCell.appendChild(btn);
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

function getCheckBox(){
  var checked = [];
  for(i=0;i<ids.length;i++){

    if(document.getElementById("box" + ids[i]).checked){
      checked = checked.concat(ids[i]);
    }
  }
  
  //checked = JSON.stringify(checked);
 
  $.ajax({
    type: "POST",
    url: "/SPW-Project/php/updateMessage.php",
    data: {
      "messageId": checked
    }
  })
  .done(function (data, textStatus, jqXHR) {
    
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

function buttonPress() {

  var buildId = event.srcElement.id;

  $.ajax({
      type: "POST",
      url: "/SPW-Project/php/deleteMessage.php",
      data: {
        "buildId": buildId
      }
    })
    .done(function (data, textStatus, jqXHR) {
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

document.getElementById("markread").addEventListener("click", getCheckBox);