window.onload=function(){
				 
(function(){				           
  var html = document.documentElement;
  var windowWidth = html.clientWidth;
  html.style.fontSize = windowWidth /15+ 'px';
  })();
	$('.inpu li').last().css({'border':'none'})
	$('.inpu input').eq(1).css({'border-right':'1px solid #cccccc'})
	$('body').on('click','#yzm',cshqyzm);
	function cshqyzm(){
		$('#yzm').html("重新获取").css({'color':'#ccc'});
	}
	
	var mySwiper2 = new Swiper('#swiper-container1',{
		
		})
	$('body').on('click','#wjmm',wjmmclick);
	function wjmmclick(){
		$('#zhmm').show();
		$('#dl').hide();
		$('#zc').hide();
	}
	$('.touxiang').on('click','#toubutton',toubuttondl);
	function toubuttondl(){
		$('#dl').show();
		$('#zym').hide();
	}
	$('body').on('click','#zcfh',zhmmfhclick);
	$('body').on('click','#zhmmfh',zhmmfhclick);
	function zhmmfhclick(){
		$('#dl').show();
		$('#zhmm').hide();
		$('#zc').hide();
	}
	$('body').on('click','.zcxyh',zcxyhclick);
	function zcxyhclick(){
		$('#dl').hide();
		$('#zhmm').hide();
		$('#zc').show();
	}
	
	$('body').on('click','#zcbdl',zymshow);
	function zymshow(){
		$('#zym').show()
		$('#zym').siblings().hide()
	}

	
		$('body').on('click','.gj',qhgjshow);
	
		$('body').on('click','#bhaoulclose',qhgjhide);
	function qhgjshow(){
		$('#qhgj i').css({'background-color':'#ff4e07'});
		$('.bhao').show()
		$('.bhaoul').show()
	}
	function qhgjhide(){
		$('#qhgj i').css({'background-color':'#ccc'});
		$('.bhao').hide()
		$('.bhaoul').hide()
	}

		$('body').on('click','#jiaodaohang li',fyan)
		function  fyan(){
			$(this).css({'background-color':'#ff4e07'})
			$(this).siblings().css({'background-color':'#cccccc'})
		}
	
		
	
	var mySwiper2 = new Swiper('#swiper-container2', {
	pagination : '.fyq2',
	
	autoplay: 3000,//可选选项，自动滑动
	loop:true,
	
	})
	var mySwiper_zyem = new Swiper('#zym', {
	pagination : '.swiper-pagination1',
	paginationClickable :true,
	paginationBulletRender:daohangjiao,

	})
	 function  daohangjiao(swiper, index, className) {
	 	var imgdao=['img/icon_bar_home_off-11.png','img/icon_bar_service_on-2.png','img/形状-251.png','img/xinagzhuang53.png']
	 	//var contunt=['首页','分类','目的地','我的'];
         return '<span class="' + className + '">' +'<img src="'+imgdao[index]+'"/>' + '</span>';
	 }

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}