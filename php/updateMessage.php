<?php

  if (!isset($_SESSION)){
    session_start();
  }

  include('config.php');

  $request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form
  $messageId = $request["messageId"];

  //echo $messageId;

  $mysqli = new mysqli($servername, $username, $password, $dbname);
 

  if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
  } else {
      $stmt = $mysqli->prepare("UPDATE messages SET markread = 'Read' WHERE find_in_set(id,?) ");
      $csv = implode(",", $messageId);
      $stmt->bind_param("s", $csv);
      $stmt->execute();
      echo "updated";  
    }
  $mysqli->close();  

?>

