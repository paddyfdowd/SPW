<?php

    if (!isset($_SESSION))
    {
      session_start();
    }

    include('config.php');

    $request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form
    $buildId = $request["buildId"];

    $mysqli = new mysqli($servername, $username, $password, $dbname);
    
    $rows = array();

    if ($mysqli->connect_errno) {
      echo "Failed to connect to MySQL: " . $mysqli->connect_error;
      exit();
    } else{
        
      $stmt = $mysqli->prepare("DELETE FROM builder where id = ?");
      $stmt->bind_param("s", $buildId);
        
      $stmt->execute();
      echo "deleted";  
    }

    
    $mysqli->close(); 

?>

