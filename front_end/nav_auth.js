

let loggedIn = window.sessionStorage.getItem("loggedIn");

if (loggedIn != "true") {
    const homeLink = document.getElementById('home_nav');
    homeLink.href = "index.html";
    homeLink.textContent = "Landing";
    //    window.location.href = "index.html";
}
