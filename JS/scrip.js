// Simulación de una base de datos de clientes
const baseDeDatosClientes = [
    {
        nombre: "Homero",
        apellido: "Simpson",
        edad: 39
    },
    {
        nombre: "Marge",
        apellido: "Simpson",
        edad: 36
    },
    {
        nombre: "Bart",
        apellido: "Simpson",
        edad: 10
    }
];

// Función para mostrar información del cliente
document.getElementById("mostrarCliente").addEventListener("click", function() {
    const cliente = baseDeDatosClientes[0]; // Obteniendo a Homero
    const info = `Nombre: ${cliente.nombre} ${cliente.apellido}, Edad: ${cliente.edad}`;
    document.getElementById("clienteInfo").innerText = info;

    // También se puede mostrar en la consola
    console.log(info);
});
