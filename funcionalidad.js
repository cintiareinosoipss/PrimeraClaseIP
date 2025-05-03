document.addEventListener("DOMContentLoaded", function(){
    const boton = document.getElementById("cambiarTexto");
    const mensaje = document.getElementById("mensaje");

    boton.addEventListener("click", function(){
        mensaje.textContent = "Haz cambiado el mensaje con JavaScript";
        document.body.style.backgroundColor = "#dcedc8";

        for (let i =1; i<=10; i++){
            console.log("ciclo for  de 1 al 10 " + i);
        }
    
        const respuesta = prompt("¿Como te llamas?");
        console.log(respuesta);
        if (respuesta=== "Daniel") {
            alert ("Hola " + respuesta + " Bienvenido");
        } else {
            alert ("Mejor ven otro día");
        }
        


    });
});
