
let hour = setInterval(myTime, 1000);
function myTime(){
    let h = new Date(), displayDate;
    if(navigator.userAgent.toLocaleLowerCase().indexOf('firefox')> -1){
        displayDate = h.toLocaleTimeString('pt-BR');
    }else{
        displayDate = h.toLocaleTimeString('pt-BR',{timeZone:'America/brasilia'});
    }
    document.getElementById("hor").innerText = displayDate;
}

const body = document.querySelector('body');
function changerTheme(){
    if(
        document.documentElement.classList.contains('dark')
    ){document.documentElement.classList.remove('dark');
    }else{
        document.documentElement.classList.add('dark');
    }
}
document.documentElement.classList.add('dark')


window.onscroll = function(){scrollFunction()};
function scrollFunction(){
if(document.body.scroll >400 || document.documentElement.scrollTop > 400){
    document.getElementById("top").style.display = "block";
}else{
    document.getElementById("top").style.display = "none";
    }
}
function topButt(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};



function sideMenu(menuS){
    var display =document.getElementById(menuS).style.display;
    if(display == "flex")
        document.getElementById(menuS).style.display = 'none';
    else
        document.getElementById(menuS).style.display = 'flex';
};
