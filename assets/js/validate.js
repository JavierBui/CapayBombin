
    document.getElementById("login-form").addEventListener("submit", async function(event) {
        event.preventDefault();
    
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
    
        const user = await validateUser(username, password);
    
        if (user) {

            sessionStorage.setItem("accessGranted", "true");
            window.location.href = "Guion_Prv.html"; 
        } else {
            document.getElementById("error-message").style.display = "block"; 
        }
    });

    async function validateUser(username, password) {
    try {
        
        const encodedJson = "ewogICAgInVzZXJzIjogWwogICAgICAgIHsgInVzZXJuYW1lIjogIkJvbWJpbiIsICJwYXNzd29yZCI6ICIyMDEwIiB9LAogICAgICAgIHsgInVzZXJuYW1lIjogImJvbWJpbiIsICJwYXNzd29yZCI6ICIyMDEwIiB9LAogICAgICAgIHsgInVzZXJuYW1lIjogIkJvbWLDrW4iLCAicGFzc3dvcmQiOiAiMjAxMCIgfSwKICAgICAgICB7ICJ1c2VybmFtZSI6ICJib21iw61uIiwgInBhc3N3b3JkIjogIjIwMTAiIH0KICAgIF0KfQo=";  // Reemplaza con tu Base64 completo

        const decodedJson = atob(encodedJson); 
        const data = JSON.parse(decodedJson);  

        const user = data.users.find(u => u.username === username && u.password === password);

        return user; 
    } catch (error) {
        console.error('Error de validación:', error);
        return null; 
    }

    }