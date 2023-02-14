<?php

 $valores = $_REQUEST['valores'];

$conexion = mysqli_connect('localhost', 'root', 1234, 'world');
if (mysqli_connect_errno()) {
    echo 'Error al conectar a MySQL: ' . mysqli_connect_error();
}   

$consulta = mysqli_prepare($conexion, 'SELECT Name from city where name like "'.$valores.'%";');

$consulta->execute();
$resultado = $consulta->get_result();

while ($myrow = $resultado->fetch_assoc()) {
    echo $myrow['Name'] . ', ';
}


