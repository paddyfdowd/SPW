<?php

    if (!isset($_SESSION))
    {
        session_start();
    }

    include('config.php');

    $request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form

    $databasetype = $request["databasetype"];
    $contactform = $request["contactform"];
    $pcolour = $request["pcolour"];
    $scolour = $request["scolour"];
    $uname = $_SESSION["username"];
 
    $mysqli = new mysqli($servername, $username, $password, $dbname);

    if ($mysqli->connect_errno) {
      echo "Failed to connect to MySQL: " . $mysqli->connect_error;
      exit();
    } else{
        
       /* Prepared statement, stage 1: prepare */
        $stmt = $mysqli->prepare("INSERT INTO builder(databasetype, contactform, pcolour, scolour,username) VALUES (?, ?, ?, ?, ?)");

        $stmt->bind_param("sssss", $databasetype, $contactform, $pcolour, $scolour, $uname);
        
        $stmt->execute();

        echo "success";

    } 

    
    $mysqli->close();


?>