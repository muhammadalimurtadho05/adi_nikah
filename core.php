<?php

require 'connect.php';

$data = Query('SELECT * FROM undangan');

while($datas = mysqli_fetch_assoc($data)){
    echo $datas['judul'].' - <a target="_blank" href="'. $datas['link'].'"> Instagram</a>';
    echo '<br>';
}