<?php
header('Content-type:application/json;charset=utf-8');
$jsonStr=file_get_contents('data.json');
echo $jsonStr;



?>