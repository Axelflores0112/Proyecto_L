<?php
$user="root";
$pass="";
$host="localhost";
$data_base="datos_proyectol";
$conexion=mysqli_connect($host,$user,$pass,$data_base);
if ($conexion) {
    echo "si conexion";
}else{
    echo "no conexion";
}
?>

<?php
    if(isset($_POST['registrar'])){
        $nombre=$_POST["nombre"];
        $contraseña=$_POST["contraseña"];
        $correo=$_POST["email"];
        
        $insertarDatos="INSERT INTO datos_usuario VALUES ('','$nombre','$contraseña','$correo')";
        $consulta=mysqli_query($conexion, $insertarDatos);
    }
?>