document.querySelector("form").addEventListener("submit", function(e){
    console.log("send");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log(name, email, password);

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
});