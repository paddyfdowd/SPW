<?php

    if (!isset($_SESSION)){
        session_start();
    }

    include('config.php');

    if(!isset($_SESSION["username"])){
        echo "notsignedin";
    } else {

    $request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form

    $reviewbody = $request["reviewbody"];
    $score = $request["score"];
    $uname = $_SESSION["username"];

    $reviewbody = htmlspecialchars($reviewbody); 
    $mysqli = new mysqli($servername, $username, $password, $dbname);

    if ($mysqli->connect_errno){
      echo "Failed to connect to MySQL: " . $mysqli->connect_error;
      exit();
    } else {
        $stmt = $mysqli->prepare("INSERT INTO reviews(reviewbody, score, reviewname) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $reviewbody, $score, $uname);
        $stmt->execute();
        echo "review submitted";
    }
    $mysqli->close();
}  

?>