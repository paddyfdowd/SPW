<?php

    if (!isset($_SESSION))
    {
      session_start();
    }
 

    include('config.php');

    $mysqli = new mysqli($servername, $username, $password, $dbname);
    
    $rows = array();

    if ($mysqli->connect_errno) {
      echo "Failed to connect to MySQL: " . $mysqli->connect_error;
      exit();
    } else{
        
      $stmt = $mysqli->prepare("SELECT * FROM builder");
      
        
      $stmt->execute();
        
      $result = $stmt->get_result();
      
      while($r = $result->fetch_assoc()) {
        $rows[] = $r;
      }
      echo json_encode($rows);
    }

    
    $mysqli->close(); 

?>

