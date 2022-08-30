var nameId = document.getElementById("nameId");
var passId = document.getElementById("passId");
var loginbtn = document.getElementById("login-button");
loginbtn.addEventListener("click" , check);
document.getElementById("season1").addEventListener("click" , show)
document.getElementById("season2").addEventListener("click" , show2)
document.getElementById("season3").addEventListener("click" , show3)
document.getElementById("season4").addEventListener("click" , show4)
document.getElementById("back").addEventListener("click" , back)


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
        document.getElementById("mute").style.display="none";

    }

}


function back(){
    document.getElementById("seasons").style.display="flex";
    document.getElementById("seasons").style.flexDirection="row";
    document.getElementById("season1").style.display="flex";
    document.getElementById("season2").style.display="flex";
    document.getElementById("season3").style.display="flex";
    document.getElementById("season4").style.display="flex";
    document.getElementById("seasons").style.width="700px";
    document.getElementById("s1").style.display="none";
    document.getElementById("s2").style.display="none";
    document.getElementById("s3").style.display="none";
    document.getElementById("s4").style.display="none";
    document.getElementById("divB").style.display="none";

}


function show(){
    document.getElementById("season1").style.display="none";
    document.getElementById("season2").style.display="none";
    document.getElementById("season3").style.display="none";
    document.getElementById("season4").style.display="none";
    document.getElementById("seasons").style.width="1400px";
    document.getElementById("s1").style.display="flex";
    document.getElementById("seasons").style.flexDirection="column";
    document.getElementById("divB").style.display="flex";

    
}

function show2(){
    document.getElementById("season1").style.display="none";
    document.getElementById("season2").style.display="none";
    document.getElementById("season3").style.display="none";
    document.getElementById("season4").style.display="none";
    document.getElementById("seasons").style.width="1400px";
    document.getElementById("s2").style.display="flex";
    document.getElementById("seasons").style.flexDirection="column";
    document.getElementById("divB").style.display="flex";
    

}


function show3(){
    document.getElementById("season1").style.display="none";
    document.getElementById("season2").style.display="none";
    document.getElementById("season3").style.display="none";
    document.getElementById("season4").style.display="none";
    document.getElementById("seasons").style.width="1400px";
    document.getElementById("s3").style.display="flex";
    document.getElementById("seasons").style.flexDirection="column";
    document.getElementById("divB").style.display="flex";
}


function show4(){
    document.getElementById("season1").style.display="none";
    document.getElementById("season2").style.display="none";
    document.getElementById("season3").style.display="none";
    document.getElementById("season4").style.display="none";
    document.getElementById("seasons").style.width="1400px";
    document.getElementById("s4").style.display="flex";
    document.getElementById("seasons").style.flexDirection="column";
    document.getElementById("divB").style.display="flex";
}