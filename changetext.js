javascript: void
function() {
	//gets the text of the selection
    var selezione = window.getSelection();
    var stringaSelezione = selezione.toString();
    var daCambiare = new RegExp(stringaSelezione, "ig");
    //popup
    var cambiaIn = prompt("Modify with:", "");
    //changes the text!
    if (cambiaIn!=""){
    var work = document.getElementById("workskin").innerHTML;
    work = work.replaceAll(daCambiare, cambiaIn);
    document.getElementById("workskin").innerHTML = work;
    }
}();



javascript: void function(){var a=window.getSelection().toString();a=new RegExp(a,"ig");var c=prompt("Modify with:","");if(""!=c){var b=document.getElementById("workskin").innerHTML;b=b.replaceAll(a,c);document.getElementById("workskin").innerHTML=b}}();