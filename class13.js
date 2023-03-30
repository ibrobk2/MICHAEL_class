function Login(){
    // e.preventDefault();
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    var lnk = document.getElementById("login");

    // console.log(username);
    // console.log(password);

    if(username=="Michael" && password=="123456"){
        lnk.href = "class9.html";
    }
    else{
        alert("Invalid Username/Password!");
    }
}