<?php
ini_set('display_errors', 'Off');
/*
define("DB_SERVER", "localhost");
define("DB_USER", "root");
define("DB_PASS", "");
define("DB_NAME", "samo_organsko");
*/


const DB_SERVER = 'localhost';
const DB_USER = 'root';
const DB_PASS = '';
const DB_NAME = 'cv';


try {
    $db= new PDO('mysql:host='.DB_SERVER.';dbname='.DB_NAME.';charset=utf8', 'root', '');
    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
} catch (PDOException $e) {
    die("Greska!");
}
?>