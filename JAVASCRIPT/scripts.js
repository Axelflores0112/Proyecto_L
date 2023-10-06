const formulario = document.getElementById('form'); //acceder a un elemento por id en est caso formulario.
const inputs = document.querySelectorAll('#form input');//Forma de que javascript acceda a los inputs que tenemos
const email=document.getElementById("email");
const clave=document.getElementById("password");

const expresiones = { //expresiones regulares par validacion.

	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.

}

//Funcion para borrar alerta de inputs.
const borrarAlerta = ()=>{
	if( email.value!=""|| !clave.value!=""){
		document.getElementById("email_vacio").style.display="none";
		document.getElementById("clave_vacia").style.display="none";
	}
}
const validarForm = (e)=>{
	switch(e.target.name){
		case"email":
		validarCampo(expresiones.correo,e.target,'correo');
		break;
		case "password":
			validarCampo(expresiones.password,e.target,'password')
		break;
	}
};

const validarCampo=(expresion,input,campo) => {//Funcion para validar campo
	if (expresion.test(input.value)) {
		document.getElementById(`grupo_${campo}`).classList.remove('form-incorrect');
		document.getElementById(`grupo_${campo}`).classList.add('form-correct');
	  }else{
		document.getElementById(`grupo_${campo}`).classList.add('form-incorrect');
		
	  }
	  if (input.value=="") {
		document.getElementById(`grupo_${campo}`).classList.remove('form-incorrect');
		document.getElementById(`grupo_${campo}`).classList.remove('form-correct');
	  }
}
//Accion que va ser evaluada por la funcion de comprobacion.
inputs.forEach((input)=>{
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
    input.addEventListener('keydown', borrarAlerta);
});
//////////////////////////////////////////////////////////////////////////////////////////


//funcion para comprobar que esten llenos los inputs
formulario.addEventListener('submit', (e) =>{
	if(email.value==""){
		document.getElementById("email_vacio").style.display="block";
		document.getElementById("email_vacio").style.color="red";
		e.preventDefault();////funcion para detener la accion de envio de datos
	}else{
		document.getElementById("email_vacio").style.display="none";
		e.preventDefault();////funcion para detener la accion de envio de datos
	}

	if(clave.value==""){
		document.getElementById("clave_vacia").style.display="block";
		document.getElementById("clave_vacia").style.color="red";
		e.preventDefault();////funcion para detener la accion de envio de datos
	}else{
		document.getElementById("clave_vacia").style.display="none";
		e.preventDefault();////funcion para detener la accion de envio de datos
	}
	e.preventDefault();
});