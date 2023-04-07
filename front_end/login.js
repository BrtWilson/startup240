window.sessionStorage.setItem("loggedIn", "false");

async function login() {
    let endpnt = `/api/auth/login`;
    const userName = document.querySelector('#name')?.value;
    const password = document.querySelector('#password')?.value;
    let response_set = { userName: userName, password: password };

    loginOrCreate(endpnt, response_set);
}

async function createUser() {
    let endpnt = `/api/auth/create`;
    const userName = document.querySelector('#cname')?.value;
    const password = document.querySelector('#cpassword')?.value;
    const pkmnPick = document.querySelector('input[name="pkmn_pick"]:checked').value;
    let response_set = { userName: userName, password: password, pokemon: pkmnPick };
    
    loginOrCreate(endpnt, response_set);
}

async function loginOrCreate(endpnt, response_set) {
    const response = await fetch(endpnt, {
        method: 'post',
        body: JSON.stringify(response_set),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const userInfoResp = await response.json();
    console.log(userInfoResp);

    if (response?.status === 200) {
        const userName = document.querySelector('#name')?.value;
        localStorage.setItem('userName', userName);
        localStorage.setItem("player", JSON.stringify(userInfoResp));
        window.sessionStorage.setItem("loggedIn", "true");
        window.location.href = "home.html";
    } else {
        alert(`⚠ Error: ${userInfoResp.msg}`);
    }
}

function logout() {
    window.sessionStorage.setItem("loggedIn", "false");
    fetch(`/api/auth/logout`, {
        method: 'delete',
    }).then(() => (window.location.href = '/'));
}