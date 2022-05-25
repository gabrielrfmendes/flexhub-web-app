function authenticate({ user, password }) {
    fetch('http://api.flexlife/authenticate', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            user,
            password
        })
    })
    .then(response => {
        localStorage.setItem('accessToken', response.body.get('accessToken'));
    })
    .catch(error => {
        new Error(error)
    })
}

export default authenticate;
