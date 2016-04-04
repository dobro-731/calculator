var x;
var z;
var y;
var c;

function a() {
    var a = parseInt(document.getElementById("tekst").value)
    return(a);
}
function slojenie(){  x = a(); z = null; y = null; c = null; };
function vichitanie() { z = a(); x = null; y = null; c = null;};
function umnojenie() {  y = a(); z = null; x = null; c = null;};
function delenie() {  c = a(); z = null; y = null; x = null;};



function ravno() { 
    if (x!=null) {
        var q= parseInt(document.getElementById("tekst").value);
       document.getElementById("tekst").value = q + x;
    }
      if (z!=null) {
        var q= parseInt(document.getElementById("tekst").value);
       document.getElementById("tekst").value = z - q;
    }
      if (y!=null) {
        var q= parseInt(document.getElementById("tekst").value);
       document.getElementById("tekst").value = q * y;
    }
      if (c!=null) {
        var q= parseInt(document.getElementById("tekst").value);
       document.getElementById("tekst").value = c / q;
    }
    
   

}

    