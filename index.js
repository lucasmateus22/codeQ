
/** let elemente = document.querySelector('.menuS');
element.classlist.replace('')



const body = document.querySelector('body');
function changercolor(){
    if(
        document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark');
        }else{
            document.documentElement.classList.add('dark');
        }
}
document.documentElement.classList.add('dark');
     

window.onscroll=function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scroll > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("btnScroll").style.display = "block";
    }else{
        document.getElementById("btnScroll").style.display = "none";
    }
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};



var myVar = setInterval(myTime, 1000);
function myTime(){
    var d = new Date(), displayDate;
    if(navigator.userAgent.toLocaleLowerCase().indexOf('firefox') > -1){
        displayDate = d.toLocaleTimeString('pt-BR');
    }else{
        displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/pernambuco'});
    }
    document.getElementById("demo").innerHTML = displayDate;
}
*/
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