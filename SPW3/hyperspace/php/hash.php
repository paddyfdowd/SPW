<?php
   
   include('config.php');
   
   $request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form
    $uname = $request["uname"];
    $pword = $request["pword"];
    $name = $request["name"];
    $address = $request["address"];

    $hashedpword = password_hash($pword, PASSWORD_ARGON2I);

    $mysqli = new mysqli($servername, $username, $password, $dbname);

    if ($mysqli->connect_errno) {
      echo "Failed to connect to MySQL: " . $mysqli->connect_error;
      exit();
    } else{
        
       /* Prepared statement, stage 1: prepare */
        $stmt = $mysqli->prepare("INSERT INTO users(username, name, address, hashpassword) VALUES (?, ?, ?, ?)");

        $stmt->bind_param("ssss", $uname, $name, $address, $hashedpword);
        
        $stmt->execute();

        echo "success";

    } 

    
    $mysqli->close(); 
    

?>