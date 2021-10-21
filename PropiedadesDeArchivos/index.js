    //API FILE
//PROPIEDADES DEL INPUT FILE: 
    //Name
    //Size
    //Type

window.addEventListener("load",start,false);

function start(){

        zonaInfo = document.getElementById("zonaInformacion");
        botonFile = document.getElementById("archivos");
        pie = document.getElementById("footer");
        //Evento change cuando se seleccionan archivos
        botonFile.addEventListener("change",leerInfo, false);

}

function leerInfo(e){
        //Archivos seleccionados
        var archivos = e.target.files;
        
        //Cogemos el primero (en bucle podriamos leer todos los seleccionados)
        var miarchivo = archivos[0];

        //Hacemos un match para obligar a que introduzca una imagen
        if(!miarchivo.type.match(/image/)){
                pie.style.backgroundColor = "red";
                pie.innerHTML = "ERROR";
                zonaInfo.innerHTML = "<div>Debes seleccionar una imagen</div>";
        }else{
                pie.innerHTML = "IMAGEN SUBIDA";
                pie.style.backgroundColor = "green";

                //Creamos lector para leer la informacion de la imagen en DataUrl
                var reader = new FileReader();
                reader.readAsDataURL(miarchivo);
                //Añadimos el evento de carga de informacion en el lector
                reader.addEventListener("load",mostrarImagen,false);

                zonaInfo.innerHTML = "<div>Tipo: " + miarchivo.type + "<br>Nombre: " + miarchivo.name + "<br>Tamaño: " + Math.round(miarchivo.size/1024) + "KB</div>";
        }
}

function mostrarImagen(e){
        //Recogemos el resultado de la lectura DataURL
        var resultado = e.target.result;
        //Mostramos la imagen con src
        zonaInfo.innerHTML += "<img src='" +resultado+"'>";
}