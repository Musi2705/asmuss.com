// Einfacher JavaScript-Code für das Kontaktformular
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Feedback für den Nutzer
    alert(`Vielen Dank, ${name}! Ihre Nachricht wurde gesendet.`);
    
    // Formular zurücksetzen
    document.getElementById("contact-form").reset();
});

  