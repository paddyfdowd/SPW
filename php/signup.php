<?php

   /*  include('config.php');

    $request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form
    $uname = $request["uname"];
    $pword = $request["pword"];


    $mysqli = new mysqli($servername, $username, $password, $dbname);

    if ($mysqli->connect_errno) {
      echo "Failed to connect to MySQL: " . $mysqli->connect_error;
      exit();
    } else{
        
        
      $stmt = $mysqli->prepare("INSERT INTO messages(name, email, message) VALUES (?, ?, ?)");

      $stmt->bind_param("sss", $name, $email, $message);
      
      $stmt->execute();

      echo "success";

 */



   /*  // Set the INSERT SQL data
    $sql = "INSERT INTO unamepword (username  ,password)
    VALUES ('".$uname."', '".$pword."')";

    // Process the query so that we will save the date of birth
    if ($mysqli->query($sql)) {
      echo "user added";
    } else {
      return "Error: " . $sql . "<br>" . $mysqli->error;
    } 

    }

    
    $mysqli->close();
    */

?>
