const response = await fetch('/signup', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' }
});

if (response.ok) {
    // This is the line that actually "moves" the user to the new page
    window.location.href = '/login.html'; 
} else {
    alert("Signup failed!");
}
