
let personas = []

function validar(){
    let elementoNombre = document.getElementById("nombre")
    let valorIngresadoNombre = elementoNombre.value
    let elementoErrorNombre = document.getElementById("errorNombre")

    let elementoApellido = document.getElementById("apellido")
    let valorIngresadoApellido = elementoApellido.value
    let elementoErrorApellido = document.getElementById("errorApellido")

    let elementoCorreo = document.getElementById("correo")
    let valorIngresadoCorreo = elementoCorreo.value
    let elementoErrorCorreo = document.getElementById("errorCorreo")

    let elementoEdad = document.getElementById("edad")
    let valorIngresadoEdad = elementoEdad.value
    let elementoErrorEdad = document.getElementById("errorEdad")

    let vlmNombre = validarLargoMinimo(elementoNombre,valorIngresadoNombre,elementoErrorNombre)
    let vlmApellido = validarLargoMinimo(elementoApellido,valorIngresadoApellido,elementoErrorApellido)
    let vCorreo = validarCorreo(elementoCorreo,valorIngresadoCorreo,elementoErrorCorreo)
    let vEdad = validarEdad(elementoEdad,valorIngresadoEdad,elementoErrorEdad)

    if (vlmNombre == true && vlmApellido == true && vCorreo == true && vEdad == true){
        let persona = {
            nombre : valorIngresadoNombre,
            apellido : valorIngresadoApellido,
            correo : valorIngresadoCorreo,
            edad : valorIngresadoEdad
        }
        personas.push(persona)
        elementoNombre.value = ""
        elementoApellido.value = ""
        elementoCorreo.value = ""
        elementoEdad.value = ""
        cargarTablaDatosPersonas()
    }

}

function validarLargoMinimo(elemento,valorIngresado,elementoError){
    if(valorIngresado.length==0){
        alert("debes ingresar algo")
        elementoError.innerText = "debes ingresar algo"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return false
    }
    else if (valorIngresado.length > 3){
        alert("bueno")
        elementoError.innerText = ""
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
        return true
    }
    else {
        alert("debes ingresar mas de 3 caracteres")
        elementoError.innerText = "debes ingresar mas de 3 caracteres"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return false
    }
}

function validarCorreo(elemento,valorIngresado,elementoError){
    if(valorIngresado.length==0){
        alert("debes ingresar un correo")
        elementoError.innerText = "debes ingresar un correo"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return false
    }
    else {
        alert("correo valido")
        elementoError.innerText = ""
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
        return true
    }
}

function validarEdad(elemento,valorIngresado,elementoError){
    if(valorIngresado.length==0){
        alert("debes ingresar tu edad")
        elementoError.innerText = "debes ingresar tu edad"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return false
    }
    else if(valorIngresado > 18){
        alert("esta bueno")
        elementoError.innerText = ""
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
        return true
    }
    else{
        alert("debes tener mas de 18 años")
        elementoError.innerText = "debes tener mas de 18 años"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return false
    }
}

function cargarTablaDatosPersonas(){
    let tablaDatosPersonas = document.getElementById("tablaDatosPersonas")
    let personasMap = personas.map((p,index)=>{
        return "<tr><td>"+p.nombre+"</td>"+
                "<td>"+p.apellido+"</td>"+
                "<td>"+p.correo+"</td>"+
                "<td>"+p.edad+"</td>"+
                "<td><button onclick='eliminar("+index+")'>Eliminar</button></td>"+
                "<td><button onclick='cargarDatos("+index+")'>Actualizar</button></td></tr>"
    })
    let personasStr = personasMap.join("")
    tablaDatosPersonas.innerHTML = personasStr
}

function eliminar(indice){
    personas = personas.filter((p,index)=>{
        if (index != indice){
            return p
        }
    })
    cargarTablaDatosPersonas()
}

function cargarDatos(indice){
    let elementoNombre = document.getElementById("nombre1")
    let elementoApellido = document.getElementById("apellido1")
    let elementoCorreo = document.getElementById("correo1")
    let elementoEdad = document.getElementById("edad1")

    let btnActualizar = document.getElementById("btnActualizar")
    btnActualizar.value = indice

    let persona = personas.filter((p,index)=>{
        if (index == indice){
            return p 
        }
    })
    elementoNombre.value = persona[0].nombre
    elementoApellido.value = persona[0].apellido
    elementoCorreo.value = persona[0].correo
    elementoEdad.value = persona[0].edad
    
}

function actualizar(){
    let elementoNombre = document.getElementById("nombre1")
    let valorEditadoNombre = elementoNombre.value
    
    let elementoApellido = document.getElementById("apellido1")
    let valorEditadoApellido = elementoApellido.value

    let elementoCorreo = document.getElementById("correo1")
    let valorEditadoCorreo = elementoCorreo.value

    let elementoEdad = document.getElementById("edad1")
    let valorEditadoEdad = elementoEdad.value

    let btnActualizar = document.getElementById("btnActualizar")
    let indice = btnActualizar.value

    personas = personas.map((p,index)=>{
        if (index == indice){
            return {
                nombre : valorEditadoNombre,
                apellido : valorEditadoApellido,
                correo : valorEditadoCorreo,
                edad : valorEditadoEdad
            }
        }
        else{
            return p
        }
    })
    cargarTablaDatosPersonas()

}