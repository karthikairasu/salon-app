/*-----right click disable-----*/

var message = "This Option Encrpted....";

function rtclickcheck(keyp)
{ 
  if (navigator.appName == "Netscape" && keyp.which == 3)
    { 
      alert(message); return false; 
    }

  if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) 
    { 
      alert(message); return false; 
    } 
}

document.onmousedown = rtclickcheck;

/*-----ctrl + U disable-----*/

document.onkeydown = function(e) {
    if(e.keyCode == 123) {
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
     return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
     return false;
    }   
    if(e.ctrlKey && e.keyCode == 'I'.charCodeAt(0)){
     return false;
    }    
 }
/*-----jquery ctrl disable-----*/

/*---$(document).ready(function() {
    document.onkeydown = function(e){
        if (e.ctrlKey &&
            ( e.keyCode === 67 ||
                e.keyCode === 73 ||
                e.keyCode === 74 ||
                e.keyCode === 86 ||
                e.keyCode === 85 ||
                e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
    };
});----*/

