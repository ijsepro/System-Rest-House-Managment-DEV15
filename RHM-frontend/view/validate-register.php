<?php

$firstname = $_POST["FirstName"];
$lastname = $_POST["LastName"];
$username = $_POST["UserName"];
$email = $_POST["email"];
$password = $_POST["password"];
$check = $_POST["Register"];
$find="validate";
$error = "";


if (preg_match("/^[A-Za-z ]+$/", $firstname) != 1) {
    $error .= "firstname,";
}

if ($error === "") {
    if ($check === "btn") {
        header("Location: register.php?firstname={$firstname}&lastname={$lastname}&username={$username}&email={$email}&password={$password}");

} else {
        if ($check === "btn") {
            header("Location: index.php?firstname={$firstname}&lastname={$lastname}&username={$username}&email={$email}&password={$password}&error={$error}");
        }
    }
}



