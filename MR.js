var nameId = document.getElementById("nameId");
var passId = document.getElementById("passId");
var loginbtn = document.getElementById("login-button");
loginbtn.addEventListener("click" , check);


function check(){
    if(nameId.value == "manipapan2" && passId.value == "vvvvv00000" ){
        loginbtn.style.pointerEvents="none";
        loginbtn.style.cursor="none";
        loginbtn.style.background="transparent";
        document.getElementById("loginmamol").style.display="none";
        document.getElementById("charkhesh").style.display="flex";
        nameId.addEventListener("keyup" , asli);
        passId.addEventListener("keyup" , asli);
    }
    else{
        alert("bad");
    }
}

function asli(){
    if(nameId.value == "admin" && passId.value == "12345678"){
        alert("");
        document.getElementById("audio").play();
    }

}
