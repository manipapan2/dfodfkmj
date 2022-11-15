var nameId = document.getElementById("nameId");
var passId = document.getElementById("passId");
var loginbtn = document.getElementById("login-button");
loginbtn.addEventListener("click" , ghh);
loginbtn.addEventListener("click" , check);
document.getElementById("season1").addEventListener("click" , show)
document.getElementById("season2").addEventListener("click" , show2)
document.getElementById("season3").addEventListener("click" , show3)
document.getElementById("season4").addEventListener("click" , show4)
document.getElementById("back").addEventListener("click" , back)
document.getElementById("mute").addEventListener("click" , pausemusic)



setInterval(() => {
    loginbtn.style.pointerEvents = "painted";
}, 500);

function check(){

    if(nameId.value != "" && passId.value != ""){
        check2()
    }

}


function check2(){
    if(nameId.value == "manipapan2" && passId.value == "vvvvv00000" || nameId.value == "maral_abdi" && passId.value == "zertzort" || nameId.value == "burny_souls" && passId.value == "zertzort"){
        document.getElementById("audioBest").pause()
        loginbtn.style.pointerEvents="none";
        loginbtn.style.cursor="none";
        loginbtn.style.background="transparent";
        document.getElementById("loginmamol").style.display="none";
        document.getElementById("charkhesh").style.display="flex";
        nameId.addEventListener("keyup" , asli);
        passId.addEventListener("keyup" , asli);
    }

    else{
        alert("Invalid Username Or Password")
    }
}

function asli(){
    if(nameId.value == "admin" && passId.value == "12345678"){
        document.getElementById("audio").play();
        document.getElementById("datab").style.display="none";
        document.getElementById("seasons").style.display="flex";
        document.getElementById("mute").style.display="flex";

    }

}


function back(){
    document.getElementById("seasons").style.marginBottom="40";
    document.getElementById("seasons").style.display="flex";
    document.getElementById("seasons").style.flexDirection="row";
    document.getElementById("season1").style.display="flex";
    document.getElementById("season2").style.display="flex";
    document.getElementById("season3").style.display="flex";
    document.getElementById("season4").style.display="flex";
    document.getElementById("seasons").style.width="50%";
    document.getElementById("seasons").style.marginBottom="40px";
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
    document.getElementById("seasons").style.width="100%";
    document.getElementById("seasons").style.marginBottom="0";
    document.getElementById("s1").style.display="grid";
    document.getElementById("s1").style.margin="auto";
    document.getElementById("seasons").style.flexDirection="column";
    document.getElementById("divB").style.display="flex";

    
}

function show2(){
    document.getElementById("season1").style.display="none";
    document.getElementById("season2").style.display="none";
    document.getElementById("season3").style.display="none";
    document.getElementById("season4").style.display="none";
    document.getElementById("seasons").style.width="100%";
    document.getElementById("seasons").style.marginBottom="0";
    document.getElementById("s2").style.display="grid";
    document.getElementById("s2").style.margin="auto";
    document.getElementById("seasons").style.flexDirection="column";
    document.getElementById("divB").style.display="flex";
    

}


function show3(){
    document.getElementById("season1").style.display="none";
    document.getElementById("season2").style.display="none";
    document.getElementById("season3").style.display="none";
    document.getElementById("season4").style.display="none";
    document.getElementById("seasons").style.width="100%";
    document.getElementById("seasons").style.marginBottom="0";
    document.getElementById("s3").style.display="grid";
    document.getElementById("s3").style.margin="auto";
    document.getElementById("seasons").style.flexDirection="column";
    document.getElementById("divB").style.display="flex";
}


function show4(){
    document.getElementById("season1").style.display="none";
    document.getElementById("season2").style.display="none";
    document.getElementById("season3").style.display="none";
    document.getElementById("season4").style.display="none";
    document.getElementById("seasons").style.width="100%";
    document.getElementById("seasons").style.marginBottom="0";
    document.getElementById("s4").style.display="grid";
    document.getElementById("s4").style.margin="auto";
    document.getElementById("seasons").style.flexDirection="column";
    document.getElementById("divB").style.display="flex";
}



function pausemusic(){
    // document.getElementById("audio").pause();
    // document.getElementById("muteB").innerHTML="Play";
    if(document.getElementById("mp").innerHTML == "Mute Music"){
        document.getElementById("audio").pause();
        document.getElementById("mp").innerHTML = "Play Music";
        document.getElementById("ggd").classList.add="gg-play";
        document.getElementById("ggd").classList.remove="gg-play-pause-o";
    }
    else if(document.getElementById("mp").innerHTML == "Play Music"){
        document.getElementById("audio").play();
        document.getElementById("mp").innerHTML = "Mute Music";
        document.getElementById("ggd").classList.remove="gg-play";
        document.getElementById("ggd").classList.add="gg-play-pause-o";
    }
}


function ghh(){
    if(nameId.value === "" || passId.value === "" && loginbtn.style.transform == "translate(0px, 0px)"  || loginbtn.style.transform == 'translate(0px, 0px)'){
        loginbtn.style.transition = 'all 0.3s ease'
        loginbtn.style.transform = 'translate(80px,0px)'
        loginbtn.style.pointerEvents = "none"
        document.getElementById("audioBest").play()
        loginbtn.addEventListener("mouseover" , hovering);
    }

    else{
        console.log(nameId.value)
    }

}


function inpug(){
    if(nameId.value != "" && passId.value != "" && loginbtn.style.transform != 'translate(0px, 0px)' || loginbtn.style.transform != 'translate(0px, 0px)'){
        loginbtn.style.transform = 'translate(0px, 0px)'
        loginbtn.style.pointerEvents = "painted"
        
    }
}


function hovering(){


    if(nameId.value == "" | passId.value == "" && loginbtn.style.transform == 'translate(-79px, 0px)'){
        loginbtn.style.transition = 'all 0.3s ease'
        loginbtn.style.transform = 'translate(-80px,0px)'
        loginbtn.style.pointerEvents = "none"
    }

    if(nameId.value == "" | passId.value == "" && loginbtn.style.transform == 'translate(79px, 0px)'){
        loginbtn.style.transition = 'all 0.3s ease'
        loginbtn.style.transform = 'translate(-79px,0px)'
        loginbtn.style.pointerEvents = "none"
    }


    if(nameId.value == "" | passId.value == "" && loginbtn.style.transform == 'translate(-80px, 0px)'){
        loginbtn.style.transition = 'all 0.3s ease'
        loginbtn.style.transform = 'translate(79px,0px)'
        loginbtn.style.pointerEvents = "none"
    }


    if(nameId.value == "" | passId.value == "" && loginbtn.style.transform == 'translate(80px, 0px)'){
        loginbtn.style.transition = 'all 0.3s ease'
        loginbtn.style.transform = 'translate(-80px,0px)'
        loginbtn.style.pointerEvents = "none"
        // console.log(loginbtn.style.transform)
    }



    if(nameId.value == "" | passId.value == "" && loginbtn.style.transform == '' || loginbtn.style.transform == 'translate(0px, 0px)'){
    loginbtn.style.transition = 'all 0.3s ease'
    loginbtn.style.transform = 'translate(80px,0px)'
    loginbtn.style.pointerEvents = "none"
        // console.log(loginbtn.style.transform)
    }

}


// function pob(){

// }

