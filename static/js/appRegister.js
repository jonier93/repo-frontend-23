
function register_user(){

    let nombre = document.getElementById("name").value
    let apellido = document.getElementById("lastname").value
    let cedula = document.getElementById("id").value
    let telefono = document.getElementById("phone").value
    let fecha = document.getElementById("date").value
    let email = document.getElementById("email").value
    let contrasena = document.getElementById("passw").value
    let check_accepted = document.getElementById("check-accepted").checked

    let confirm_vacio = validar_vacio(nombre, apellido, cedula, telefono, fecha, email, contrasena, check_accepted)
    
    if (confirm_vacio == true) {  
        let confirm_nombre = validar_texto(nombre)
        let confirm_apellido = validar_texto(apellido)
        let confirm_cedula = validar_numeros(cedula)
        let confirm_telefono = validar_numeros(telefono)
        let confirm_contrasena = validar_contrasena(contrasena)
        let confirm_texto = false
        let confirm_numero = false
        
        if (confirm_nombre == true && confirm_apellido == true) {    
            confirm_texto = true        
        }
        else {
            alert("Los campos nombre y apellido solo pueden contener letras")
        }

        if (confirm_cedula==true && confirm_telefono==true){
            confirm_numero = true
        }
        else {
            alert("Los campos cédula y teléfono solo pueden contener numeros")
        }

        if (confirm_contrasena == true) {
            
        }
        else {
            alert("La contraseña no cumple todos los criterios")
        }

        if (confirm_texto == true && confirm_numero == true && confirm_contrasena == true) {
            alert("Usuario creado exitosamente")
        }
        else {
            alert("Error creando usuario")
        }        
        
    }
    else {
        alert("ninguno de los campos puede ser vacío")
    }
}

function validar_vacio(nombre, apellido, cedula, telefono, fecha, email, contrasena, check_accepted) {
    let confirm_vacio = true 
    if (nombre == "") {
        alert("El campo nombre no puede ser vacío")
        confirm_vacio = false
    }
    if (apellido == "") {
        alert("El campo apellido no puede ser vacío")
        confirm_vacio = false
    }
    if (cedula == "") {
        alert("El campo cédula no puede ser vacío")
        confirm_vacio = false
    }
    if (telefono == "") {
        alert("El campo telefóno no puede ser vacío")
        confirm_vacio = false
    }
    if (fecha == "") {
        alert("El campo fecha no puede ser vacío")
        confirm_vacio = false
    }
    if (email == "") {
        alert("El campo email no puede ser vacío")
        confirm_vacio = false
    }
    if (contrasena == "") {
        alert("El campo contrasena no puede ser vacío")
        confirm_vacio = false
    }
    if (check_accepted == false) {
        alert("Debe aceptar los términos")
        confirm_vacio = false
    }
    return confirm_vacio
}

function validar_texto(texto_campo) {
    //console.log(nombre.split(" "))
    let confirm_texto = true
    let array_texto = Array.from(texto_campo)
    for(let i=0; i<array_texto.length; i++) {
        if (array_texto[i] == '0' || array_texto[i] == '1' || array_texto[i] == '2' || array_texto[i] == '3' || array_texto[i] == '4' || array_texto[i] == '5' || array_texto[i] == '6' || array_texto[i] == '7' || array_texto[i] == '8' || array_texto[i] == '9') {
            confirm_texto = false
            break
        }
    }  
    /*
    let regex = /^[a-zA-Z]+$/
    let validar_expresion = regex.test(nombre); 
    console.log(validar_expresion)
    */
   return confirm_texto
}

function validar_numeros(numero_campo) {
    let confirm_numero = true
    let array_numer = Array.from(numero_campo)  
    for(let i=0; i<array_numer.length; i++){
        if (array_numer[i] == '0' || array_numer[i] == '1' || array_numer[i] == '2' || array_numer[i] == '3' || array_numer[i] == '4' || array_numer[i] == '5' || array_numer[i] == '6' || array_numer[i] == '7' || array_numer[i] == '8' || array_numer[i] == '9') {
            
        }
        else {
            confirm_numero = false
            break
        }
    }
    return confirm_numero
}

function validar_contrasena(contrasena_campo) {
    let confirm_contrasena = false
    let confirm_cantidad = true
    let confirm_numero = false
    let confirm_texto_mayusc = false
    let confirm_texto_minusc = false
    let array_contrasena = Array.from(contrasena_campo)
    if (array_contrasena.length > 8) {
        for(let i=0; i<array_contrasena.length; i++){
            if (array_contrasena[i] == '0' || array_contrasena[i] == '1' || array_contrasena[i] == '2' || array_contrasena[i] == '3' || array_contrasena[i] == '4' || array_contrasena[i] == '5' || array_contrasena[i] == '6' || array_contrasena[i] == '7' || array_contrasena[i] == '8' || array_contrasena[i] == '9') {
                confirm_numero = true
                break
            }
        }  
        for(let i=0; i<array_contrasena.length; i++){
            if (array_contrasena[i] == '0' || array_contrasena[i] == '1' || array_contrasena[i] == '2' || array_contrasena[i] == '3' || array_contrasena[i] == '4' || array_contrasena[i] == '5' || array_contrasena[i] == '6' || array_contrasena[i] == '7' || array_contrasena[i] == '8' || array_contrasena[i] == '9') {
                
            }
            else {
                if (array_contrasena[i] == array_contrasena[i].toUpperCase()) {
                    confirm_texto_mayusc = true
                }
                if (array_contrasena[i] == array_contrasena[i].toLowerCase()) {
                    confirm_texto_minusc = true
                }               
                if (confirm_texto_mayusc==true && confirm_texto_minusc==true) {
                    break
                }                
            }
        }                                            
    }
    else {
        alert("La contraseña debe tener al menos 8 caracteres")
        confirm_cantidad = false
    }

    if (confirm_numero == false) {
        alert("La contraseña debe contener al menos un número")
    }
    if (confirm_texto_mayusc == false) {
        alert("La contraseña debe contener al menos una mayuscula")
    }
    if (confirm_texto_minusc == false) {
        alert("La contraseña debe contener al menos una minuscula")
    }

    if (confirm_numero == true && confirm_texto_mayusc==true && confirm_texto_minusc==true) {
        confirm_contrasena = true
    }
    return confirm_contrasena
}

function validar_correo() {

}