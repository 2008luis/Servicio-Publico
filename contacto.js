function validarCampos() {
    let nombre = document.getElementById('name').Value;
    let correo = document.getElementById('correo').Value;
    let mensaje = document.getElementById('mensaje').Value;
    let telefono = document.getElementById('telefono').Value;

    if(nombre == ""){
        alert('por favor didgite su nombre completo');
    }else if(correo == "" || !correo.incluide('@') || !correo.incluide('.com') ){
        alert("no es un correo valido");
    }else if(mensaje == ""){
        alert('mensaje esta vacio escriba su necesidad ');
    }else if(telefono = "" || telefono != 10){
        alert('escriba su telefono bien gracias');
    }else{
        alert('Mensajes enviados con éxito, pronto le atenderan sus dudas');
    }
}