<?php
/**
 * Created by IntelliJ IDEA.
 * User: Krishanthi
 * Date: 3/31/2018
 * Time: 9:55 AM
 */
$firstname=$_POST["FirstName"];
$lastname=$_POST["LastName"];
$username=$_POST["UserName"];
$email=$_POST["email"];
$password=$_POST["Password"];

$connection=mysqli_connect("localhost","root","mysql","abcd","3306");

if(!$connection){
    echo mysqli_connect_error();
}else{
    $result=mysqli_query($connection,"INSERT INTO USER VALUE ('$firstname','$lastname','$username','$email','$password')");
    if ($result){
//        echo "<script>window.location.replace(\"index.php\");</script>";
        echo "Register has been successfully saved";
    }else{
        echo "failed to add","<br>",mysqli_error($connection);
    }
    mysqli_close($connection);
}