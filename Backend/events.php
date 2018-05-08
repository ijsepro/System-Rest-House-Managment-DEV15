<?php
/**
 * Created by IntelliJ IDEA.
 * User: Imalka Gunawardana
 * Date: 5/6/2018
 * Time: 6:59 PM
 */

header('Access-Control-Allow-Origin: *');

$data_back = json_decode(file_get_contents('php://input'));
$email = $data_back->{"packageName"};

class Events
{
    public $eventName = "";
    public $eventValue = 0;
}

$data = array();

$e = new Events();
$e->eventName = $email;
$e->eventValue = 10;

array_push($data, $e);

$e = new Events();
$e->eventName = "Van1";
$e->eventValue = 10;

array_push($data, $e);

$e = new Events();
$e->eventName = "Van2";
$e->eventValue = 20;

array_push($data, $e);

echo json_encode($data);
