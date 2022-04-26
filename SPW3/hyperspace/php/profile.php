<?php

    include('config.php');

    $request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form

    $uname = $request["uname"];
    $pword = $request["pword"];


    $mysqli = new mysqli($servername, $username, $password, $dbname);

    if ($mysqli->connect_errno) {
      echo "Failed to connect to MySQL: " . $mysqli->connect_error;
      exit();
    } else{
        


      $stmt = $mysqli->prepare("SELECT hashpassword from users WHERE username = ?");

      $stmt->bind_param("s",$uname);
        
      $stmt->execute();
        
      $result = $stmt->get_result();
      
      $row = $result->fetch_assoc(); // fetch data
      
      $returnedhash = $row["hashpassword"];
      if (password_verify($pword,$returnedhash)){

        echo "Found Match";

      }else{
        echo "no match";
      }


    }

    
    $mysqli->close();

?>