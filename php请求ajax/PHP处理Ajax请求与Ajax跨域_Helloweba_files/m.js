var UA = navigator.userAgent.toLowerCase();
var url = window.location;
url = url.toString();
if((UA.indexOf('iphone') != -1 || UA.indexOf('mobile') != -1 || UA.indexOf('android') != -1 || UA.indexOf('ipad') != -1 || UA.indexOf('windows ce') != -1 || UA.indexOf('ipod') != -1) && UA.indexOf('ipod') == -1) {
if (url.match(/^http:\/\/www\.helloweba\.com\/$/) || url.match(/^http:\/\/www\.helloweba\.com$/)) { Go('http:\/\/m\.helloweba\.com'); }
if (url.match(/\/view-blog-\d+?\.html/)){id = url.match(/\/view-blog-(\d+?)\.html/);Go('http://m.helloweba.com/view-'+id[1]+'.html');}
if (url.match(/css\.html/)) {Go('http://m.helloweba.com/css.html');}
if (url.match(/jquery\.html/)) {Go('http://m.helloweba.com/jquery.html');}
if (url.match(/php\.html/)) {Go('http://m.helloweba.com/php.html');}
if (url.match(/web\.html/)) {Go('http://m.helloweba.com/web.html');}
}
function Go(url) { window.location = url;}

function content_support(){
	//document.write('<script type="text/javascript">google_ad_client = "ca-pub-7515443544894528";google_ad_slot = "4994735103";google_ad_width = 468;google_ad_height = 60;</script>');
	//document.write('<script type="text/javascript" src="//pagead2.googlesyndication.com/pagead/show_ads.js"></script>');
	document.write('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>');
	document.write('<ins class="adsbygoogle" style="display:inline-block;width:468px;height:60px" data-ad-client="ca-pub-7515443544894528" data-ad-slot="4994735103"></ins>');
	document.write('<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
}

function qianduan_72890(){
	document.write("<script type=\"text/javascript\">google_ad_client = \"ca-pub-7515443544894528\";google_ad_slot = \"9359369107\";google_ad_width = 728;google_ad_height = 90;</script>");
	document.write("<script type=\"text/javascript\" src=\"//pagead2.googlesyndication.com/pagead/show_ads.js\"></script>");
}