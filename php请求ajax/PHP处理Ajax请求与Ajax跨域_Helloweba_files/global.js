$(function(){
	//$("#slink").html('<a href="http://j.jikexueyuan.com/train/webdeveloper?hmsr=helloweba_dh_jiuye_web_0112" target="_blank" rel="nofollow" class="cur adclick" data-ref="jike_nav">Web前端教程</a>');
	
	$("#search_form").submit(function(){
		var keywords = $("#keys").val();
	    if(keywords=="输入关键字搜索" || keywords==""){
		    alert("请输入关键字搜索！");
		    return false;
	    }
	});
	
	// 页面浮动面板
	$("#floatPanel a.arrow").eq(0).click(function(){
		$("html,body").animate({scrollTop :0}, 300);
		return false;
	});
	$("#floatPanel a.arrow").eq(1).click(function(){
		$("html,body").animate({scrollTop : $(document).height()}, 300);
		return false;
	});

	var panel = $(".popPanel");	
	var w = panel.outerWidth();
	
	$(".qrcode").hover(function(){
		panel.css("width","0px").show();
		panel.animate({"width" : w + "px"},300);
	},function(){
		panel.animate({"width" : "0px"},300);
	});
	/*$(".adclick").on('click', function(event) {
		var curl = window.location.href;
		var adp = $(this).data('ref');
		$.post('/adclick.php', {aid:adp, url:curl});
		//event.preventDefault();
	});*/
});


/*Helloweba_整站横幅_960*90*/
function banner_page(){
	//document.write('<script type="text/javascript">var cpro_id = "u2471838";</script>');
	//document.write('<script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script>');
	//document.write('<script type="text/javascript">google_ad_client = "ca-pub-7515443544894528";google_ad_slot = "1300212306";google_ad_width = 970;google_ad_height = 90;</script>');
	//document.write('<script type="text/javascript" src="//pagead2.googlesyndication.com/pagead/show_ads.js"></script>');
}

function banner_box(){
	document.write("<br/>广告位<br/>90x90");
	document.write("");
}
