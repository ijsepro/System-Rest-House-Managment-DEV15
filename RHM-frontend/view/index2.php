<?php
/**
 * Created by IntelliJ IDEA.
 * User: Krishanthi
 * Date: 4/1/2018
 * Time: 10:58 AM
 */$firstname = "";
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
<style>
    body{
        margin: 0px;
        padding: 0px;
    //background: url("image/background.jpg");
        font-family: sans-serif;
    }
    .register-box{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 350px;
        box-sizing: border-box;
        background: transparent;
        box-shadow: 0 10px 20px rgba(0,0,0,.5);
        border-radius: 5px;
        transition: .5s;
    }
    .glass{
        width: 100%;
        height: 100%;
        padding: 40px;
        box-sizing: border-box;
        background: rgba(255,255,255,.1);
        border-radius: 5px;
        transition: .5s;
    }
    .register-box:hover{
        box-shadow: 0 10px 20px ;
        background: rgba(255,255,255,1);

    }
    .glass:hover{
        transform: translate(20px,20px);
        box-shadow: 0 10px 20px rgba(0,0,0,.5);
    }
    .user{
        margin: 0 auto;
        display: block;
        margin-bottom: 20px;
    }
    h1{
        margin: 0;
        padding: 0 0 20px;
        color: #262626;
        text-align: center;
    }
    .loginBox input{
        width: 100%;
        margin-bottom: 20px;

    }
    .loginBox input[type="password"]{
        border: none;
        border-bottom: 2px solid #262626;
        outline: none;
        height: 40px;
        color: #262626;
        background: transparent;
        font-size: 16px;
        padding-left: 20px;
        box-sizing: border-box;
    }

    .inputBox{
        position: relative;
    }
    .inputBox span{
        position: absolute;
        top: 10px;
        color: #262626;
    }
    .loginBox input[type="submit"]{
        border: none;
        outline: none;
        height: 40px;
        font-size: 16px;
        background: #ed292a;
        color: #fff;
        border-radius: 20px;
        cursor: pointer;
    }
    .loginBox a{
        color: #262626;
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
        text-align: center;
        display: block;
    }

</style>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title></title>
    <link rel="stylesheet"type="text/css" href="css/semantic.min.css">
    <link rel="stylesheet"type="text/css" href="css/font-awesome.min.css">
    <link rel="stylesheet"type="text/css" href="css/bootstrap.min.css">
</head>
<body id="body">
    <br>
<div class="register-box">
    <form id="frmRegistation" action="saveRegistation.php" method="POST" enctype="application/x-www-form-urlencoded">

        <div class="register-box-body">
            <p class="login-box-msg">Register a new membership</p>

            <form action="" method="POST" enctype="application/x-www-form-urlencoded">
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" placeholder="Full name" name="fullname" required="">
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" placeholder="User Name" name="username" required="">
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="email" class="form-control" placeholder="Email" name="email" required="">
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="Password" name="password" required="">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <!--            <div class="form-group has-feedback">-->
                <!--                <input type="password" class="form-control" placeholder="Retype password">-->
                <!--                <span class="glyphicon glyphicon-log-in form-control-feedback"></span>-->
                <!--            </div>-->
                <div class="form-group has-feedback">
                    <input type="email" class="form-control" placeholder="Contact" name="contact" required="">
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="Envollment No" name="envollment" required="">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-8">
                        <div class="checkbox icheck">
                            <label>
                                <input type="checkbox"> I agree to the <a href="#">terms</a>
                            </label>
                        </div>
                    </div>
                    <!-- /.col -->
                    <div class="col-xs-4" >
                        <button href="index.php" type="submit" class="btn btn-primary btn-block btn-flat">Register</button>
                    </div>
                    <!-- /.col -->
                </div>
            </form>

            <div class="social-auth-links text-center">
                <p>- OR -</p>
                <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign up using
                    Facebook</a>
                <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign up using
                    Google+</a>
            </div>

            <a href="index.php" class="text-center">I already have a membership</a>
        </div>
    </form>
</div>
<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/semantic.min.js"></script>
<script src="js/home-controller.js"></script>
<script src="js/RegisterController.js"></script>
</form>
</body>
</html>

