<?php
$user="root";
$pass="";
$host="localhost";
$data_base="datos_proyectol";
$conexion=mysqli_connect($host,$user,$pass,$data_base);
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
<?php
/*
class Db{
    private static $instaciar;
    private $conexion;

    private $user="root";
    private $pass="";
    private $host="localhost";
    private $data_base="datos_proyectol"; 

     // Constructor privado para prevenir instanciación directa
     private function __construct(){
        $this->conexion=new mysqli($this->host,$this->user,$this->pass,$this->data_base);
        if($this->conexion->connect_error){
            die("Error en la conexion");
        }
     }

     // Método para obtener la instancia única
     public static function getInstancia(){
        if(self::$instaciar===null){//verificar si la instacia aun no se ha creado
            self::$instaciar=new Db();//crear la instancia y si no se ha creado y la asigna al metodo
        }
        return self::$instaciar;
     }

     // Método para obtener la conexión a la base de datos
     public function getConexion(){
        return $this->conexion;
     }

     public static function setQueryToArray($object)
{
    // Inicializa un array vacío que se utilizará para almacenar los resultados de la consulta.
    $arr = [];

    // Itera a través de cada fila del resultado de la consulta y la agrega al array.
    while ($row = $object->fetch_assoc()) {
        // Agrega la fila al array.
        array_push($arr, $row);
    }

    // Devuelve el array que contiene los resultados de la consulta en formato de array asociativo.
    return $arr;
}
}*/
?>