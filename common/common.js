//搜索输入框显示
var seaImg = document.querySelector(".seaImg");


//搜索输入框隐藏
var close = document.querySelector(".close");

seaImg.onclick = function () {
    var input = document.querySelector(".searchInput");
    input.style.left = "-510px";
    input.style.width = "510px";
    seaImg.style.display = "none";
    close.style.display = "inline-block";
}

close.onclick = function () {
    var input = document.querySelector(".searchInput");
    input.style.left = "0px";
    input.style.width = "0px";
    seaImg.style.display = "block";
    close.style.display = "none";
}

//显示个人中心
var selfCenter = document.querySelector(".selfCenter");
var selfAct = document.querySelector(".selfAct");
selfCenter.onclick = function () {
    if(selfAct.style.height == 0 || selfAct.style.height == "0px"){
        selfAct.style.height = "400px";
    }else{
        selfAct.style.height = "0px";
    }
}