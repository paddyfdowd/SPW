<?php

if (!isset($_SESSION))
{
  session_start();
}



    if(isset($_SESSION["username"])){

        echo "loggedin";

    }else{
        echo "Failure";
    }

 
?>