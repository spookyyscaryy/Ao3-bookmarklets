javascript: void
function() {
	//gets the text of the selection
    var selezione = window.getSelection();
    var daCambiare = selezione.toString();
    //popup
    var cambiaIn = prompt("Modify with:", " ");
    //changes the text!
    var work = document.getElementById("workskin").innerHTML;
    work = work.replaceAll(daCambiare, cambiaIn);
    document.getElementById("workskin").innerHTML = work;
}();