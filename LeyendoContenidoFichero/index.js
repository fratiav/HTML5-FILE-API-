    //API FILE
//Se compone de 3 especificaciones:
        //API FILE: Procesado de informacion de archivos
        //API File Directories & System: Creacion de sistema de archivos
        //API File Writer: Escritura de contenido dentro de los archivos

//Para leer informacion de los archivos hay que usar la interfaz FileReader 
        //--> Metodos(readAsText{UTF8}, readAsBinaryString{0,255}, readAsDataUrl{base64 codificada}, readAsArrayBuffer{datos array binario})

window.addEventListener("load",start,false);

function start(){

        zonaInfo = document.getElementById("zonaInformacion");
        botonFile = document.getElementById("archivos");

        //Evento change cuando se seleccionan archivos
        botonFile.addEventListener("change",leerInfo, false);

}

function leerInfo(e){
        //Archivos seleccionados
        var archivos = e.target.files;
        
        //Cogemos el primero (en bucle podriamos leer todos los seleccionados)
        var miarchivo = archivos[0];

        //Objeto de lectura
        var reader = new FileReader();

        //Leemos el archivo como texto. Podría añadirse otra codificacion como segundo parametro readAsText(miarchivo, "iso-8859-1")
        reader.readAsText(miarchivo);

        //Cuando carga la informacion el lector se produce el evento load. Lo usamos para mostrar la informacion leida.
        reader.addEventListener("load",mostrarDatos,false);
}

function mostrarDatos(e){
        //Recogemos el resultado de texto leido
        var resultado = e.target.result;

        //Lo mostramos en la web
        zonaInfo.innerHTML = "<div>"+resultado+"</div>";
}