<?php

    if (!isset($_SESSION)){
        session_start();
    }

    if($_SESSION["isadmin"] == "1"){
        echo "admin";
    } else {
        echo "Failure";
    }

?>