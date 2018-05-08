<?php
/**
 * Created by IntelliJ IDEA.
 * User: Imalka Gunawardana
 * Date: 5/6/2018
 * Time: 7:45 PM
 */

header('Access-Control-Allow-Origin: *');

class Packages
{
    public $packageName = "";
    public $packageValue = 0;

}

$data = array();

$e = new Packages();
$e->packageName = "Car1";
$e->packageValue = 1;

array_push($data, $e);

$e = new Packages();
$e->packageName = "Car2";
$e->packageValue = 2;

array_push($data, $e);

echo json_encode($data);
