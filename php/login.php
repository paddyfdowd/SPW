<?php

if (!isset($_SESSION))
{
  session_start();
}

    include('config.php');

    $request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form

    $uname = $request["uname"];
    $pword = $request["pword"];

 

    $mysqli = new mysqli($servername, $username, $password, $dbname);

    if ($mysqli->connect_errno) {
      echo "Failed to connect to MySQL: " . $mysqli->connect_error;
      exit();
    } else{
        


      $stmt = $mysqli->prepare("SELECT hashpassword, isadmin from users WHERE username = ?");

      $stmt->bind_param("s",$uname);
      
      $stmt->execute();
        
      
      $result = $stmt->get_result();
      
      if($result->num_rows == 0){
        echo "no match";
      }
      else{
      $row = $result->fetch_assoc(); // fetch data
      

      $returnedhash = $row["hashpassword"];
      $isadmin = $row["isadmin"];

      if ($isadmin == "1"){
        $_SESSION["isadmin"] = $isadmin;
        }
      if (password_verify($pword,$returnedhash)){

        echo "Found Match";
        $_SESSION["username"] = $uname;
        
      }else{
        echo "no match";  
      }

    }
  }
    
    $mysqli->close();
    //echo json_encode($row);

?>
