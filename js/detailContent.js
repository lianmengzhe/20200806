window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop > 45){
        var productContent = document.querySelector(".productContent");
        productContent.style.position = "fixed";
        productContent.style.top = "0px";
    }else{
        var productContent = document.querySelector(".productContent");
        productContent.style.position = "relative";
        productContent.style.top = "0px";
    }
})