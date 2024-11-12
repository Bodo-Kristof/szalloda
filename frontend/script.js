// Function to show the selected content section
function showContent(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach((section) => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

// Set default content to Dashboard on load
document.addEventListener('DOMContentLoaded', () => {
    showContent('dashboard');
});

// Example function to handle reservation creation
function makeReservation() {
    const guestName = document.getElementById('guestName').value;
    const roomType = document.getElementById('roomType').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;

    if (guestName && roomType && checkIn && checkOut) {
        alert(`Foglalás létrehozva:\nVendég: ${guestName}\nSzoba: ${roomType}\nBejelentkezés: ${checkIn}\nKijelentkezés: ${checkOut}`);
    } else {
        alert("Kérjük, töltse ki az összes mezőt!");
    }
}
