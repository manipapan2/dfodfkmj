var nameId = document.getElementById("nameId");
var passId = document.getElementById("passId");
var loginbtn = document.getElementById("login-button");
loginbtn.addEventListener("click" , check);


function check(){
    if(nameId.value == "manipapan2" && passId.value == "vvvvv00000" || nameId.value == "maral abdi" && passId.value == "zertzert" || nameId.value == "burny souls" && passId.value == "zertzert"){
        loginbtn.style.pointerEvents="none";
        loginbtn.style.cursor="none";
        loginbtn.style.background="transparent";
        document.getElementById("loginmamol").style.display="none";
        document.getElementById("charkhesh").style.display="flex";
        nameId.addEventListener("keyup" , asli);
        passId.addEventListener("keyup" , asli);
    }
    else{
        alert("invalid username or password");
    }
}

function asli(){
    if(nameId.value == "admin" && passId.value == "12345678"){
        document.getElementById("audio").play();
        document.getElementById("datab").style.display="none";
        document.getElementById("seasons").style.display="flex";
    }

}


function show(){
    document.getElementById("audio").pause();
    document.getElementById("seasons").style.display="none";
    
    document.getElementById("film1").style.display="flex";
}
