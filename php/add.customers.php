<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once 'dbconnect/rb-database.class.php';
// POST DATA
$data = json_decode(file_get_contents("php://input"));
$data = $_POST;
$objDB = new DataBase;

if (empty($data['name']) || empty($data['date']) || empty($data['phone'])) {
    die('{"result":"All files is required"}');
}

$result = $objDB->Execute('INSERT into customers (name,phone,date_register) 
values ("'.$data['name'].'","'.$data['phone'].'","'.$data['date'].'")');
if ($result) {
    die('{"result":"All file insert successfuly"}');
}
