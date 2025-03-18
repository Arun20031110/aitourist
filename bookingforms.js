document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Collect form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        destination: document.getElementById("destination").value,
        date: document.getElementById("date").value,
        travelers: document.getElementById("travelers").value,
        duration: document.getElementById("duration").value,
        transport: document.getElementById("transport").value,
        room: document.getElementById("room").value,
    };

    // Send email using EmailJS
    emailjs.send("service_ce4mkk9", "template_fxymg9l", formData) // Replace with your Service ID and Template ID
        .then(function(response) {
            alert("Booking submitted successfully!");
            document.getElementById("bookingForm").reset(); // Clear the form
        }, function(error) {
            alert("Failed to submit booking. Please try again.");
        });
});
