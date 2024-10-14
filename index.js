// Add your code here
// Make a POST request to /users with a name and email
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ name, email }),
    })
    .then(res => res.json())
    .then(data => {
        const id = data.id;
        appendIdToDOM(id);
    })
    .catch(error => {
        appendErrorToDOM(error.message); 
    });
}

// Helper function to append ID to the DOM
function appendIdToDOM(id) {
    const idDisplay = document.createElement('div');
    idDisplay.textContent = `New ID: ${id}`;
    document.body.appendChild(idDisplay);
}

// Helper function to append error message to the DOM
function appendErrorToDOM(errorMessage) {
    const errorDisplay = document.createElement('div');
    errorDisplay.textContent = `Error: ${errorMessage}`;
    document.body.appendChild(errorDisplay);
}