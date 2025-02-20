// Validar el formulario
document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validación asíncrona de usuario desde un archivo JSON
    const user = await validateUser(username, password);

    if (user) {
        // Si las credenciales son correctas, guardar token en sessionStorage
        sessionStorage.setItem("accessGranted", "true");
        window.location.href = "../../Guion_Prv.html"; // Redirigir al dashboard
    } else {
        document.getElementById("error-message").style.display = "block"; // Mostrar mensaje de error
    }
});

// Función para cargar el archivo JSON y validar al usuario
async function validateUser(username, password) {
    try {
        // Cargar el archivo JSON con las credenciales
        const response = await fetch('credenciales.json');
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo de credenciales');
        }

        const data = await response.json();
        const user = data.users.find(u => u.username === username && u.password === password);

        return user; // Retornar el usuario si fue encontrado
    } catch (error) {
        console.error('Error de validación:', error);
        return null; // En caso de error o no encontrar usuario
    }
}