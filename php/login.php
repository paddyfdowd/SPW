<?php

  if (!isset($_SESSION)){
    session_start();
  }

  include('config.php');

  $request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form

  $uname = $request["uname"];
  $pword = $request["pword"];
  
  $recaptcha = $request["response"];

    $secret = "6LeV47UfAAAAAM914yAcZsIiWfNDmEje3zzKMbc0";
    $ip = $_SERVER['REMOTE_ADDR'];
  
    $postvars = array("secret"=>$secret, "response"=>$recaptcha, "remoteip"=>$ip);
    $url = "https://www.google.com/recaptcha/api/siteverify";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);
    $resp = json_decode(curl_exec($ch));
    curl_close($ch);
  
    
    if ($resp->success) {


  $mysqli = new mysqli($servername, $username, $password, $dbname);

  if ($mysqli->connect_errno){
    exit();
  } else {
      $stmt = $mysqli->prepare("SELECT hashpassword, isadmin from users WHERE username = ?");
      $stmt->bind_param("s",$uname);
      $stmt->execute();
      
      $result = $stmt->get_result();
      
      if($result->num_rows == 0){
        echo "no match";
      } else {
          $row = $result->fetch_assoc(); // fetch data
          $returnedhash = $row["hashpassword"];
          $isadmin = $row["isadmin"];
        
          if ($isadmin == "1"){
            $_SESSION["isadmin"] = $isadmin;
          }
          if (password_verify($pword,$returnedhash)){
            echo "Found Match";
            $_SESSION["username"] = $uname; 
          } else {
            echo "no match";  
          }
        }
    }
  $mysqli->close();
    //echo json_encode($row);
  }else{

    echo "Captcha Fail";
  }
?>
