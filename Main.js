let boton = document.getElementById("boton");
boton.addEventListener("click", traerDatos);

function traerDatos() {
    let dni = document.getElementById("dni").value;
    fetch(
            "https://apiperu.dev/api/dni/" +
            dni +
            "?api_token=2ff4111687b868953af939d16ddf2da30afb95e17a31d5e20694a09e324d552c"
        )
        .then((datos) => datos.json())
        .then((datos) => {
            console.log(datos.data);
            document.getElementById("doc").value = datos.data.numero;
            document.getElementById("nombre").value = datos.data.nombres;
            document.getElementById("apellido").value =
                datos.data.nombre_completo;
            document.getElementById("cui").value = datos.data.codigo_verificacion;
        });
}