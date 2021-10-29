javascript:void function(){
    var yN = new RegExp("Y/N", "ig");
    var cambiaIn = prompt("Modify with:", " "),
    work = document.getElementById("workskin").innerHTML;
work = work.replaceAll(yN, cambiaIn);
document.getElementById("workskin").innerHTML = work;

}();
