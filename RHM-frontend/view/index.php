<?php

$firstname = "";
if (!empty($_GET["firstname"])){
    $firstname = $_GET["firstname"];
}
$lastname = "";
if (!empty($_GET["lastname"])){
    $lastname = $_GET["lastname"];
}
$username = "";
if (!empty($_GET["username"])){
    $username = $_GET["username"];
}
$email = "";
if (!empty($_GET["email"])){
    $email = $_GET["email"];
}
$password = "";
if (!empty($_GET["password"])){
    $password = $_GET["password"];
}
$error = "";
$splittedText = array();
if (!empty($_GET["error"])){
    $error = $_GET["error"];
    $splittedText = explode(",", $error);
}

function isInvalid($splittedText, $input){
    if (!empty($splittedText)){
        foreach ($splittedText as $string){
            if ($string === $input){
                return "is-invalid";
            }
        }
    }
    return "";
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title></title>
    <link rel="stylesheet"type="text/css" href="css/semantic.min.css">
    <link rel="stylesheet"type="text/css" href="css/font-awesome.min.css">
    <link rel="stylesheet"type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet"type="text/css" href="css/stylesheet.css">
</head>
<body id="body">
<div id="image">
    <br>
<h1>Registation</h1>
    <br>
    <br>
    <form id="frmMain" action="validate-register.php" method="post" enctype="application/x-www-form-urlencoded">
        <div class="container">

            <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6"><label>First Name : </label></div>
                <div class="col-md-6"></div>
                <div class="col-md-6"><input type="text"class="form-control"<?= isInvalid($splittedText, "firstname")?>id="txtFirstName"placeholder="Enter First Name"name="FirstName"value="<?= $firstname?>"></div>
                </div>
            <br>
            <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6"><label>Last Name : </label></div>
                <div class="col-md-6"></div>
                <div class="col-md-6"><input type="text"class="form-control"id="txtLastName"placeholder="Enter Last Name"name="LastName"></div>
            </div>
            <br>
            <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6"><label>User Name : </label></div>
                <div class="col-md-6"></div>
                <div class="col-md-6"><input type="text"class="form-control"id="txtUserName"placeholder="Enter User Name"name="UserName"></div>
            </div>
            <br>
            <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6"><label>E-mail : </label></div>
                <div class="col-md-6"></div>
                <div class="col-md-6"><input type="text"class="form-control"id="txtemail"placeholder="Enter email"name="email"></div>
            </div>
<!--                <div class="ui right labeled input">-->
<!--                    <input placeholder="Find domain" type="text">-->
<!--                    <div class="ui dropdown label">-->
<!--                        <div class="text">.com</div>-->
<!--                        <i class="dropdown icon"></i>-->
<!--                        <div class="menu">-->
<!--                            <div class="item">.com</div>-->
<!--                            <div class="item">.net</div>-->
<!--                            <div class="item">.org</div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
            <br>
            <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6"><label>Password : </label></div>
                <div class="col-md-6"></div>
                <div class="col-md-6"><input type="password"class="form-control"id="txtPassword"placeholder="Enter Password"name="Password"></div>
            </div>
            <br>
            <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6"><button type="submit"class="btn-primary"name="Register"id="btn"value="add register">Register</button></div>
            </div>
            </div>
<!--            <div class="center aligned column">-->
<!--                <div class="ui big green labeled icon button"name="Register">-->
<!--                    <i class="fas fa-pencil"></i>-->
<!--                    Sign Up-->
<!--                </div>-->
<!--            </div>-->
        </div>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/semantic.min.js"></script>
<script src="js/home-controller.js"></script>
<script src="js/RegisterController.js"></script>
    </form>
</body>
</html>
