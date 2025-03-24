document.getElementById("download-cv").addEventListener("click", function() {
    alert("Downloading CV...");
});

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message Sent!");
});

function adminLogin() {
    let username = document.getElementById("admin-username").value;
    let password = document.getElementById("admin-password").value;
    if (username === "admin" && password === "password") {
        document.getElementById("admin-panel").style.display = "block";
        document.getElementById("login-form").style.display = "none";
    } else {
        alert("Invalid credentials!");
    }
}

function updateSection(sectionId) {
    let newText = document.getElementById(sectionId + "-input").value;
    document.getElementById(sectionId).querySelector("p").textContent = newText;
}
