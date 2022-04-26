<?php

    include('config.php');

    $request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form

    $reviewbody = $request["reviewbody"];
    $score = $request["score"];

 
    $mysqli = new mysqli($servername, $username, $password, $dbname);

    if ($mysqli->connect_errno) {
      echo "Failed to connect to MySQL: " . $mysqli->connect_error;
      exit();
    } else{
        
        
    // Set the INSERT SQL data
    $sql = "INSERT INTO reviews (reviewbody  ,score)
    VALUES ('".$reviewbody."', '".$score."')";

    // Process the query so that we will save the date of birth
    if ($mysqli->query($sql)) {
      echo "review submitted";
    } else {
      return "Error: " . $sql . "<br>" . $mysqli->error;
    }

    }

    
    $mysqli->close();


?>