function tableTest(){

    $.ajax({
        type: "GET",
        url: "/dashboard/SPW/SPW/SPW3/hyperspace/php/reviewLoad.php",
        
    })
    .done (function(data, textStatus, jqXHR) { 
      //alert("Success: " + data); 

      var datajson = JSON.parse(data);
      var length =  datajson.length;

      for(let i = 0; i < datajson.length; i++){
        var table = document.getElementById("reviewtable");
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
  
        row.insertCell(0).innerHTML= "Placeholder Name";
        row.insertCell(1).innerHTML= datajson[i].reviewbody;
        row.insertCell(2).innerHTML= datajson[i].score;
      }


    })
    .fail (function(jqXHR, textStatus, errorThrown) { 
      alert("Error" + errorThrown + textStatus); 
    })
    .always (function(jqXHROrData, textStatus, jqXHROrErrorThrown) { 
      //alert("complete"); 
    }); 
     
}
