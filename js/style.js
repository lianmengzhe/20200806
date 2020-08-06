// JavaScript Document
$(document).ready(function(){ 
$(".index_gg").slideDown('slow');

		//更换左侧导航样式
	$(".ztop_lo").click(function(){

		if($("#on_line_1").attr("class").indexOf("ztl_tline1")>0){
			$("#on_line_1").removeClass("ztl_tline1") ;
			$("#on_line_2").removeClass("ztl_dline1") ;
			$(".top_left_nav_o").slideUp('slow');
			$(".topleft_navo ul li").removeAttr("style");
		}else{
			$(".ztl_tline").addClass( 'ztl_tline1' );
			$(".ztl_dline").addClass( 'ztl_dline1' );
			$(".top_left_nav_o").slideDown('slow');
			var index = 0;
			var addClassOn;
			addClassOn=setInterval(function(){
			if(index >= $(".topleft_navo ul li").length){
				$(".topleft_navo ul li").eq(index++).css('')//改动处
				 clearInterval(addClassOn);
        		addClassOn = null;
			}else {
				$(".topleft_navo ul li").eq(index++).css("opacity","1")//改动处
			}
				},100);
					
		}
	});
		
	$("#show_center_down_o").click(function(){
		
		if($(".center_down_o").is(":hidden")){
			
			$(".center_down_o").slideDown('slow');
		}else{
			$(".center_down_o").slideUp('slow');
			}
		})
	$(".z_top_right").click(function(){
		
		if($(".z_top_right_d").is(":hidden")){
			
			$(".z_top_right_d").slideDown('slow');
		}else{
			$(".z_top_right_d").slideUp('slow');
			}
		})	
	$(".phone_fixed_gotop").click(function(){
		 $('body,html').animate({ scrollTop: 0 }, 1000);
        	return false;
		})	
		
	$(".search_o").click(function(){
		$(".search_s").addClass( 'search_s_on' );
		$(".search_down").slideDown('normal');
		$(".search_o").hide();
		$("#close_search").show();
		
		})
	$("#close_search").click(function(){
		$(".search_s").removeClass( 'search_s_on' );
		$(".search_down").slideUp('normal');
		$(".search_o").show();
		$("#close_search").hide();
		})
	$("#hide_down_nav").click(function(){
		$(".phone_fixed_o").hide('normal');
		$(".phone_fixed_o_s").show('normal');
		})
	$("#hide_down_nav_s").click(function(){
		$(".phone_fixed_o").show('normal');
		$(".phone_fixed_o_s").hide('normal');
		})
		
	
	$(window).bind("scroll", function () {  
                var sTop = $(window).scrollTop();  
                var sTop = parseInt(sTop);  
                if (sTop >= 45) {  
                   $(".products_top").css("top","0")
                } 
				if (sTop < 45) {   
                		var mtop=45-sTop;
                    $(".products_top").css("top",mtop+"px") 
                }   
            });  
	$("#qq_login").click(function(){
		window.open("https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101320034&redirect_uri=http%3A%2F%2Fjindeer.cn%2Faction%2Fqq_login_action.php&scope=get_user_info",'_self');
		})
	$("#wb_login").click(function(){
		window.open("https://api.weibo.com/oauth2/authorize?client_id=1598289871&redirect_uri=http://jindeer.cn/action/wb_login_action.php&response_type=code",'_self');
		})
		
		//手机登陆
	$("#qq_plogin").click(function(){
		window.open("https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101320034&redirect_uri=http%3A%2F%2Fjindeer.cn%2Faction%2Fqq_login_action.php&scope=get_user_info&display=mobile&g_ut=1",'_self');
		})
	$("#wb_plogin").click(function(){
		window.open("https://open.weibo.cn/oauth2/authorize?client_id=1598289871&redirect_uri=http://jindeer.cn/action/wb_login_action.php&response_type=code",'_self');
		})
	//新增收货地址	
	$("#order_add_area").click(function(){
		if($(".gwc_address_add").is(":hidden")){
			$(".gwc_address_add").slideDown('normal');
		}else{
			$(".gwc_address_add").slideUp('normal');
			}
		
		})	
		
//微信登陆验证
	
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		//alert ("微信打开11");
	 var url = location.search; //获取url中"?"符后的字串
				   
		if(GetQueryString("code")){
				
			var code=GetQueryString("code");
			
			// 获取openid
			$.post("http://jindeer.cn/wx_sample.php",{code:code},function (date){
				if (date){
					var str= new Function("return" + date)();
						
						$.post("http://jindeer.cn/index.php?a=get_wx",{openid:str.openid},function (date){
							
							if(date==11){
								alert("openid为空")
								}
							if(date==12){
								alert("首次登陆请绑定下账号")
								addcookie('username',str.nickname);
								addcookie('key',str.openid);
								
								window.open("http://jindeer.cn/index.php?p=wx_user",'_self');
								}
							if(date==13){
								addcookie('username',str.nickname);
								addcookie('key',str.openid);
								
								window.open("http://jindeer.cn/index.php?p=user",'_self');
								}
							if(date==14){
								addcookie('username',str.nickname);
								addcookie('key',str.openid);
								
								window.open("http://jindeer.cn/index.php?p=user",'_self');
								}
							})
					
					
					}else{
						//获取openid失败
						
						
						}
					
				});
			}
			else{
				//获取设置的cookie 判断用户是否登录成功，成功则跳过获取code的阶段
				var key = getcookie('key');
				
				if(key==''){
					//返回路径需要用unicode编码
					window.location = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx73e09781cec7404a&redirect_uri=http%3a%2f%2fjindeer.cn%2findex.php&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";
				}
				
			}
	} 
	
	
});

function show_nav(id){
	if($("#phone_list_"+id).is(":hidden")){
		$(".phone_list").hide('normal');
		$(".phone_li span").removeClass('phone_kg');
		$("#phone_list_"+id).slideDown('normal');
		$("#phone_kg_"+id).addClass('phone_kg' );
	}else{
		$("#phone_kg_"+id).removeClass('phone_kg');
		$("#phone_list_"+id).slideUp('normal');
		
	}
}
function hide_div(obj){
	$("."+obj).slideUp('normal');
	if(obj=='top_left_nav_o'){
	$("#on_line_1").removeClass("ztl_tline1") ;
	$("#on_line_2").removeClass("ztl_dline1") ;
	}
	}
	
function specifications(id){
	
	if($(".specifications_li_cont"+id).is(":hidden")){
		
		if(id==1){
				$("#specifications_1").addClass('specifications_li_on');
				$("#specifications_2").removeClass('specifications_li_on');
				$("#specifications_1").find("span").show();
				$("#specifications_2").find("span").hide();
				$(".specifications_li_cont1").show();
				$(".specifications_li_cont2").hide();
			}else{
				$("#specifications_2").addClass('specifications_li_on');
				$("#specifications_1").removeClass('specifications_li_on');
				$("#specifications_2").find("span").show();
				$("#specifications_1").find("span").hide();
				$(".specifications_li_cont2").show();
				$(".specifications_li_cont1").hide();
			}
		}
	}
function color_select(id){
	$(".product_show_icolori").removeClass('product_show_icolori_c');
	$("#ru_"+id).addClass('product_show_icolori_c');
	$("#p_colore").val(id);
	}
function get_gwc(){
	var user_id=$("#user_id").val();
	var p_colore=$("#p_colore").val();
	var price=$("#price").val();
	var id=parseInt($("#id").val());
	var from_id=parseInt($("#from_id").val());
	if(user_id==''){
		alert("亲，请先登录一下以便管理您的订单！")
		　location.href = "index.php?p=user&from_id="+from_id;
		return false;
 		}
	if(p_colore==''){
		alert("亲，选择一下您喜欢的颜色吧！")
		return false;
		}
	
	if(id<=0){
		alert("亲，该产品不存在！")
		return false;
		}
	$.get('index.php?a=add_shopping', {id:id,p_colore:p_colore,price:price}, function(date) {
		if(date==1){
			like=window.confirm("购物车添加成功是否去结算?")
			　if(like==true){
			　　　location.href = "index.php?p=dingdan_add"
			　}　
		   }else if(date==3){
			   alert("库存不足，无法购买！")
			}else{
				 alert("购买失败！")
				}
		})
	
	}
function show_specifications(id){
	if($("#info_proinfo_"+id).is(":hidden")){
			$("#show_proinfo_"+id).text("隐藏产品详情");
			$("#info_proinfo_"+id).show();
		}else{
			$("#show_proinfo_"+id).text("显示产品详情");
			$("#info_proinfo_"+id).hide();
			}
	
	}
function show_products_sp(id,obj){
	if($("#phone_products_"+obj+"_"+id).is(":hidden")){
			$("#phone_products_"+obj+"_"+id).show();
		}else{
			$("#phone_products_"+obj+"_"+id).hide();
			}
	}
function close_phone(id,obj){
	$("#phone_products_"+obj+"_"+id).hide();
	}
function add_order_area(){
	var s_name=$("#s_name").val()
	var s_province=$("#s_province").val()
	var s_city=$("#s_city").val()
	var s_county=$("#s_county").val()
	var s_xxdz=$("#s_xxdz").val()
	var s_tel=$("#s_tel").val()
	var s_yzbm=$("#s_yzbm").val()
	
	if(s_name==''){
		alert("请填写收货人")
		return false;
		}
	if(s_province=='省份'){
		alert("请选择省份")
		return false;
		}
	if(s_city=='地级市'){
		alert("请选择地级市")
		return false;
		}
	if(s_county=='市、县级市'){
		alert("请选择市县区")
		return false;
		}
	if(s_xxdz==''){
		alert("请填写详细地址")
		return false;
		}
	if(s_tel==''){
		alert("请输入电话")
		return false;
		}
	$.post('index.php?a=add_area', {s_name:s_name,s_province:s_province,s_city:s_city,s_county:s_county,s_xxdz:s_xxdz,s_tel:s_tel,s_yzbm:s_yzbm}, function(date) {
		if(date=='error'){
			alert("更新地址失败，登陆已经超时")
			}else{
				if($("#refresh").val()==1){
					location.reload()
				}else{
				
				$("#gwc_address_li_d ul li").html("<input name='address' type='radio' id='address_1' value='"+date+"' checked='checked'/>       <label  for='address_1' style='cursor:pointer;font-weight: normal;'>"+s_province+" "+s_city+" "+s_county+" "+s_xxdz+" "+s_name+"收 电 话 "+s_tel+" 邮 编 "+s_yzbm+"</label>")
				$(".gwc_address_add").hide();
					}
				}
		})
	
	}
function hide_clause(){
	$(".clause_o").hide();
	}
function show_clause(){
	$(".clause_o").show();
	}
	
function sumbit_order(){
	var address_id=$("input[name='address']:checked").val()
	if(address_id==undefined){
		alert("请选择收货地址！")
		return false;
	}
	var pay_act=$("input[name='pay_act']:checked").val()
	if(pay_act==undefined){
		alert("请选择付款方式！")
		return false;
	}
	var clause=$("input[name='clause']:checked").val()
	if(clause==undefined){
		alert("请先同意支付条款")
		return false;
	}
	$("#order_from").submit()
}
function show_login_zc(d){
	if(d==1){
	$(".user_l").hide(500);
	$(".user_r").slideDown(500);
	}else{
		$(".user_r").hide(500);
	$(".user_l").slideDown(500);
		}
	}
function close_index_gg(d){
	if(d==1){
	$(".index_gg").slideUp('slow');
	}else{
		$(".index_gg").slideDown('slow');
		}
	}
function show_lt_nav(){
	if($(".phone_fixed_ot").is(":hidden")){
	$(".phone_fixed_ot").slideDown('slow');
	}else{
	$(".phone_fixed_ot").slideUp('slow');	
	}
	
	}
function add_sc(pro_id){
	if(pro_id==''){
		alert("没有可供添加的商品！");
		return false;
		}
	$.post('index.php?a=add_sc', {pro_id:pro_id}, function(date) {
		if(date=='error'){
			alert("请先登录！");
			location.href = "index.php?p=user"
			return false;
			}
		if(date==1){
			alert("已加入收藏！");
			return false;
			}else{
			alert("添加失败！");	
			return false;
				}
			
		
		})
	}
function td_wx_pay(){
	
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return true;
		
		}else{
		alert("微信支付需要在微信中打开哦")
		return false;	
			}
	
	}
function tj_tk(){
	var sfruit=''
	$('input[name="goods_id[]"]:checked').each(function(){
           sfruit=$(this).val();
          });
	if(sfruit==''){
		alert("至少需要选择一个退款/退货产品");
		return false;
		}	
	var lc_tkly=$("#lc_tkly").val();
	if(lc_tkly==''){
		alert("请填写申请缘由。");
		return false;
		}
	$("#tk_from").submit()
	}
	
	
	
function GetQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r!=null) return unescape(r[2]); return null;
}

function addcookie(name,value,expireHours){
	var cookieString=name+"="+escape(value)+"; path=/";
	//判断是否设置过期时间
	if(expireHours>0){
		var date=new Date();
		date.setTime(date.getTime+expireHours*3600*1000);
		cookieString=cookieString+"; expire="+date.toGMTString();
	}
	document.cookie=cookieString;
}

function getcookie(name){
	var strcookie=document.cookie;
	var arrcookie=strcookie.split("; ");
	for(var i=0;i<arrcookie.length;i++){
	var arr=arrcookie[i].split("=");
	if(arr[0]==name)return arr[1];
	}
	return "";
}

function delCookie(name){//删除cookie
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getcookie(name);
	if(cval!=null) document.cookie= name + "="+cval+"; path=/;expires="+exp.toGMTString();
}
function keydowndeal(str){

	var skey
	skey=$("#seach_key").val();
		if(skey!=''){
			setTimeout("search_ajsx()",1000);  
		}
	}
function search_ajsx(){
	skey=$("#seach_key").val();
	$.get('index.php?a=search_ajsx', {str:skey}, function(date) {
		if(date!=''){
				$("#search_li").empty().append(date)
			}
		})
	
	
	}
function show_problem_info(id){
	if($("#body_width").val()<=760){
		$("#problem_li_li_info_"+id).slideToggle(500)
		}
	}