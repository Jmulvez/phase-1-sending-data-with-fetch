function submitData() {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(submitData => submitData.forEach(user => renderUser(user)))
}

fetch('http://localhost:3000/users'), {
    method: 'POST'
    headers: {
        'content-type: 'application/json',
        'accept: 'application/json'
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(function(error)) {
        alert("A fetch to the API was not found");
        console.log(error.message);
    }
}

