var nameId = document.getElementById("nameId");
var passId = document.getElementById("passId");
var loginbtn = document.getElementById("login-button");
loginbtn.addEventListener("click" , check);
document.getElementById("season1").addEventListener("click" , show)


function check(){
    if(nameId.value == "manipapan2" && passId.value == "vvvvv00000" || nameId.value == "maral_abdi" && passId.value == "zertzort" || nameId.value == "burny_souls" && passId.value == "zertzort"){
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
    document.getElementById("season1").style.display="none";
    document.getElementById("season2").style.display="none";
    document.getElementById("season3").style.display="none";
    document.getElementById("season4").style.display="none";
    document.getElementById("seasons").style.width="1400px";
    const nodeList = document.querySelectorAll(".season1");
    for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.display = "flex";
    }
    
}


function vid(){
    const nodeList = document.querySelectorAll(".season1");
    for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.display = "none";
    }
    document.getElementById("vid").style.display="flex";
}