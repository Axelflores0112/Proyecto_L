<?php
class Data_base{
    private $host='localhost';
    private $user= 'root';
    private $pass= '';
    private $data_base= 'datos_proyectol';

    protected $conexion;

    public function __construct(){//inicializar base de datos al instanciar clase
        $this->conexion();
    }

    public function conexion(){
        $this->conexion=new mysqli($this->host,$this->user,$this->pass,$this->data_base);//creacion de la conexion a la base da datos.

        if($this->conexion->connect_error){
            die("Hubo un problema en la conexion".$this->conexion->connect_error);
        }
    }

    public function query($sql){//metodo para hacer consultas a base de datos.
        
    }
    public function register($sql){//metodo para hacer consultas a base de datos.
        $registro=$this->conexion->prepare($sql);
        
    }
}
?>