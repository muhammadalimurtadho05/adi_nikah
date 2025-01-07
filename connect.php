<?php
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'toko';

$connection = mysqli_connect($host,$user,$password,$database);

function Query($sql){
    global $connection;
    $data =  mysqli_query($connection,$sql);
    return $data;
}