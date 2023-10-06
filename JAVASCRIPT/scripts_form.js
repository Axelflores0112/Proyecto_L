const registro = document.getElementById('registro');
const inputs=document.querySelectorAll('#registro input');
const nombre=document.getElementById("nombre");
const contraseña=document.getElementById("contraseña");
const correo=document.getElementById("correo");

const expresiones = { //expresiones regulares par validacion.

	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const borrarAlerta=()=>{//Funcion para borrar alerta de inputs
    if(nombre.value !=""|| contraseña.value !="" || correo.value !=""){
        document.getElementById("nombre_vacio").style.display="none";
        document.getElementById("contraseña_vacio").style.display="none";
        document.getElementById("email_vacio").style.display="none";
    }
}
const validaRegistro = (e)=>{
    switch(e.target.name) {
        case"email":
		validarCampo(expresiones.correo,e.target,'correo');
		break;
		case "contraseña":
			validarCampo(expresiones.password,e.target,'password');
		break;
		case "nombre":
			validarCampo(expresiones.nombre,e.target,'nombre');
		break;
    }//Switch que compara el id del elemento con las clases}
}
const validarCampo=(expresion,input,campo)=>{
    if (expresion.test(input.value)) {
        document.getElementById(`grupo_${campo}`).classList.remove('form-incorrect');
        document.getElementById(`grupo_${campo}`).classList.add('form-correct');
    }else{
        document.getElementById(`grupo_${campo}`).classList.add('form-incorrect');
    }if (input.value=="") {
		document.getElementById(`grupo_${campo}`).classList.remove('form-incorrect');
		document.getElementById(`grupo_${campo}`).classList.remove('form-correct');
	  }
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validaRegistro);
    input.addEventListener('blur', validaRegistro);
    input.addEventListener('keydown', borrarAlerta);
});
//funcion para comprobar que esten llenos los inputs
registro.addEventListener('submit', (e) =>{
	if(nombre.value==""){
		document.getElementById("nombre_vacio").style.display="block";
		document.getElementById("nombre_vacio").style.color="red";
	}else{
		document.getElementById("nombre_vacio").style.display="none";
	}
	if(contraseña.value==""){
		document.getElementById("contraseña_vacio").style.display="block";
		document.getElementById("contraseña_vacio").style.color="red";
	}else{
		document.getElementById("contraseña_vacio").style.display="none";
	}
	if(correo.value==""){
		document.getElementById("email_vacio").style.display="block";
		document.getElementById("email_vacio").style.color="red";
	}else{
		document.getElementById("email_vacio").style.display="none";
	}
	e.preventDefault();
});

