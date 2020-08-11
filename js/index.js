
//设置提示内容
var footerTips = document.querySelectorAll(".footerTip")
console.log(footerTips);
for ( let i = 0 ; i < footerTips.length ; i++ ){
    footerTips[i].addEventListener("click",function () {
        var ul = footerTips[i].getElementsByTagName("ul")[0];
        if(ul.style.display == "" || ul.style.display == "none"){
            ul.style.display = "block";
        }else{
            ul.style.display = "none";
        }
    })
}

//设置tabBar显示隐藏
var types = document.querySelector(".types");
var hidde = document.querySelector(".hidde");
var tabBar = document.querySelector(".tabBar");
var showTab = document.querySelector(".showTab");
var company = document.querySelector(".company");
hidde.addEventListener("click",function () {
    tabBar.style.display = "none";
    types.style.display = "none";
    types.style.bottom = "1em";
    company.style.marginBottom = 0;
    showTab.style.display = "block";
})
showTab.addEventListener("click",function () {
    tabBar.style.display = "flex";
    types.style.display = "block";
    showTab.style.display = "none";
    company.style.marginBottom = 5+"em";
})

//设置顶部提示
var ztop_lo = document.querySelector(".ztop_lo");
var topTip = document.querySelector(".topTip");
ztop_lo.addEventListener("click",function () {
    console.log(topTip.style.height);
    if( topTip.style.height == "100vh"){
        topTip.style.height = 0;
    }else{
        topTip.style.height = "100vh";
    }
})

//设置个人中心
var z_top_right = document.querySelector(".z_top_right");
var self = document.querySelector(".self");
z_top_right.addEventListener("click",function () {
    console.log(self.style.height);
    if( self.style.height == "100vh"){
        self.style.height = 0;
    }else{
        self.style.height = "100vh";
    }
})

//弹出种类
var type = document.querySelector(".type");
type.onclick = function () {
    if(types.style.bottom == "1em" || types.style.bottom == ""){
        types.style.bottom = "5em";
    }else{
        types.style.bottom = "1em";
    }
}



