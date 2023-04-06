window.sessionStorage.setItem("loggedIn", "false");

async function login() {
    loginOrCreate(`/api/auth/login`);
}

async function createUser() {
    loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#name')?.value;
    const password = document.querySelector('#password')?.value;
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ userName: userName, password: password }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const userInfoResp = await response.json();
  
    if (response?.status === 200) {
        localStorage.setItem('userName', userName);
        localStorage.setItem("player", JSON.stringify(userInfoResp));
        window.sessionStorage.setItem("loggedIn", "true");
        window.location.href = "home.html";
    } else {
        alert(`⚠ Error: ${body.msg}`);
    }
}

function logout() {
    window.sessionStorage.setItem("loggedIn", "false");
    fetch(`/api/auth/logout`, {
        method: 'delete',
    }).then(() => (window.location.href = '/'));
}