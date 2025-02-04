// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // Obtener el valor del campo de texto
    const nombre = document.getElementById('amigo').value.trim();

    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Agregar el nombre al array amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';

    // Actualizar la lista visible
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista antes de agregar los nuevos elementos
    lista.innerHTML = '';

    // Recorrer el array de amigos y agregar cada nombre como un <li>
    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    // Validar si hay amigos en la lista
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la pantalla
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
}
