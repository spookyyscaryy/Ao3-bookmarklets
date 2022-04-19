javascript:void function(){
    let yN = new RegExp("Y/N", "ig");
    let cambiaIn = prompt("Modify with:", ""),
    work = document.getElementById("workskin").innerHTML;
work = work.replaceAll(yN, cambiaIn);
document.getElementById("workskin").innerHTML = work;

}();



javascript:void function(){
    let yN = new RegExp(/[\[\(]?Y\/N(?!\/n)[\]\)]?/,"ig");
    let cambiaIn = prompt("Modify with:", ""),
    work = document.getElementById("workskin").innerHTML;
work = work.replaceAll(yN, cambiaIn);
document.getElementById("workskin").innerHTML = work;

}();
