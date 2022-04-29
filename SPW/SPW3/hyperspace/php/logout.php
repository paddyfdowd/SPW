<?php

  if (!isset($_SESSION)){
    session_start();
  }

  $_SESSION["username"] =  "";
  $_SESSION["isadmin"] =  "";
  session_destroy();

  echo "sessionended"

?>