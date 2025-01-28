// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Muestra un mensaje de bienvenida
alert('Bienvenidos al juego del amigo secreto');

// Array con los nombres de los amigos secretos
const amigos = ['Ana', 'Juan', 'Pedro', 'María', 'Sofía', 'Lucas', 'Valeria', 'Marta', 'Carlos', 'Laura'];

// Función para generar un nombre secreto aleatorio del array de amigos
function generarNombreSecreto() {
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    return amigos[indiceAleatorio];
}

// Función principal del juego
function jugar() {
    let nombreSecreto = generarNombreSecreto(); // Genera el nombre secreto
    let adivinanza; 
    
    while (true) {
        adivinanza = prompt('¡Adivina el nombre del amigo secreto! Elige entre: ' + amigos.join(', ')); // Solicita un nombre al usuario
        
        // Verifica si el nombre ingresado es igual al nombre secreto
        if (adivinanza === nombreSecreto) {
            alert('¡Adivinaste!'); 
            break; // Termina el bucle si acierta
        } else {
            alert('Intenta nuevamente.'); 
        }
    }
    
    // Preguntar si el usuario quiere jugar de nuevo
    if (confirm('¿Deseas jugar de nuevo?')) {
        jugar(); 
    } else {
        alert('¡Gracias por jugar!');
    }
}


jugar();
