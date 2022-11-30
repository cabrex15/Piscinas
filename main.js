
function limpiarFormulario(){
    let campos=document.querySelectorAll("input[type='text'],input[type='number'],input[type='email']");
    for(let x=0; x<campos.length; x++) {
        campos[x].value=``;
    }
}



let contacto=[];
function agregarContacto () {

    let persona = [];
    persona.push (document.getElementById (`txtNombre`).value);
    persona.push (document.getElementById (`txtCorreo`).value);
    persona.push (document.getElementById (`txtTelefono`).value);
    persona.push (document.getElementById (`txtMensaje`).value);

    let validarFormulario=true;
    for (let x=0; x<persona.length; x++) {
        if (persona [x]==""){
            validarFormulario=false;
    }
    }
    if (validarFormulario) {
        contacto.push (persona);
        let datos=JSON.stringify(contacto);
        localStorage.setItem('listadoContactos',datos);
        limpiarFormulario ();
        mostrarContacto();
    } else {
        alert ("Por favor completar los campos requeridos");
    }
}
function mostrarContacto (){
    var llenarTabla=document.getElementById (`tbDatos`);
    llenarTabla.innerHTML="";

    for (x=0; x<contacto.length; x++) {
        tr=document.createElement (`tr`);
        persona=contacto[x];

        for(y=0; y<persona.length; y++) {
            celda=persona[y];
            td=document.createElement(`td`);
            td.innerHTML=celda;
            tr.appendChild(td);
        }
        llenarTabla.appendChild(tr);
    }    
}
datos=localStorage.getItem('listadoContactos',);
if (datos!="") {
    contacto=JSON.parse(datos);
    mostrarContacto ()
}