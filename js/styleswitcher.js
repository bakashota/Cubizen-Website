window.console=window.console||function(){var e={};e.log=e.warn=e.debug=e.info=e.error=e.time=e.dir=e.profile=e.clear=e.exception=e.trace=e.assert=function(){};return e}();$(document).ready(function(){var e=' 	<h2>网站风格选择 <a href="#"><img class="s-s-icon" src="images/setings.png" alt="Style switcher" /></a></h2>     <div class="content2">   <h3>颜色风格</h3>     <div class="switcher-box">     <a id="yellow" class="styleswitch color current"></a> <a id="aqua" class="styleswitch color"></a> <a id="blue" class="styleswitch color"></a> <a id="nice" class="styleswitch color"></a>  <a id="red" class="styleswitch color"></a>   <a id="orange" class="styleswitch color"></a> 	<a id="green" class="styleswitch color"></a>          </div><!-- End switcher-box -->     <div class="clear"></div>      <div class="bg hidden">      <h3>背景颜色</h3>      <a id="bg-1" class="pattern current"></a>     <a id="bg-2" class="pattern"></a>     <a id="bg-3" class="pattern"></a>     <a id="bg-4" class="pattern"></a>     <a id="bg-5" class="pattern"></a>     <a id="bg-6" class="pattern"></a>     <a id="bg-7" class="pattern"></a>     <a id="bg-8" class="pattern"></a>     <a id="bg-9" class="pattern"></a>     <a id="bg-10" class="pattern"></a>   </div>     <div class="clear"></div>   <h3>宽度调整</h3> 	<div class="layout-switcher">     <a id="wide" class="layout current button ">宽屏</a>     <a id="boxed" class="layout button ">窄屏</a>     </div>     <div class="clear"></div>  <br> 	<a id="reset" class="dark-style button ">重置</a>     </div><!-- End content --> 	';$(".switcher").prepend(e)});$(document).ready(function(){var e=$.cookie("mycookie");$("body").addClass("bg-1");$("#bg-2").click(function(){$("body").removeClass("bg-1");$("body").removeClass("bg-3");$("body").removeClass("bg-4");$("body").removeClass("bg-5");$("body").removeClass("bg-6");$("body").removeClass("bg-7");$("body").removeClass("bg-8");$("body").removeClass("bg-9");$("body").removeClass("bg-10");$("body").addClass("bg-2");$.cookie("mycookie","bg-2");$(".pattern").removeClass("current");$(this).addClass("current")});$("#bg-3").click(function(){$("body").removeClass("bg-1");$("body").removeClass("bg-2");$("body").removeClass("bg-4");$("body").removeClass("bg-5");$("body").removeClass("bg-6");$("body").removeClass("bg-7");$("body").removeClass("bg-8");$("body").removeClass("bg-9");$("body").removeClass("bg-10");$("body").addClass("bg-3");$.cookie("mycookie","bg-3");$(".pattern").removeClass("current");$(this).addClass("current")});$("#bg-4").click(function(){$("body").removeClass("bg-1");$("body").removeClass("bg-2");$("body").removeClass("bg-3");$("body").removeClass("bg-5");$("body").removeClass("bg-6");$("body").removeClass("bg-7");$("body").removeClass("bg-8");$("body").removeClass("bg-9");$("body").removeClass("bg-10");$("body").addClass("bg-4");$.cookie("mycookie","bg-4");$(".pattern").removeClass("current");$(this).addClass("current")});$("#bg-1").click(function(){$("body").removeClass("bg-2");$("body").removeClass("bg-3");$("body").removeClass("bg-4");$("body").removeClass("bg-5");$("body").removeClass("bg-6");$("body").removeClass("bg-7");$("body").removeClass("bg-8");$("body").removeClass("bg-9");$("body").removeClass("bg-10");$("body").addClass("bg-1");$.cookie("mycookie","bg-1");$(".pattern").removeClass("current");$(this).addClass("current")});$("#bg-5").click(function(){$("body").removeClass("bg-1");$("body").removeClass("bg-3");$("body").removeClass("bg-4");$("body").removeClass("bg-2");$("body").removeClass("bg-6");$("body").removeClass("bg-7");$("body").removeClass("bg-8");$("body").removeClass("bg-9");$("body").removeClass("bg-10");$("body").addClass("bg-5");$.cookie("mycookie","bg-5");$(".pattern").removeClass("current");$(this).addClass("current")});$("#bg-6").click(function(){$("body").removeClass("bg-1");$("body").removeClass("bg-3");$("body").removeClass("bg-4");$("body").removeClass("bg-5");$("body").removeClass("bg-2");$("body").removeClass("bg-7");$("body").removeClass("bg-8");$("body").removeClass("bg-9");$("body").removeClass("bg-10");$("body").addClass("bg-6");$.cookie("mycookie","bg-6");$(".pattern").removeClass("current");$(this).addClass("current")});$("#bg-7").click(function(){$("body").removeClass("bg-1");$("body").removeClass("bg-3");$("body").removeClass("bg-4");$("body").removeClass("bg-5");$("body").removeClass("bg-6");$("body").removeClass("bg-2");$("body").removeClass("bg-8");$("body").removeClass("bg-9");$("body").removeClass("bg-10");$("body").addClass("bg-7");$.cookie("mycookie","bg-7");$(".pattern").removeClass("current");$(this).addClass("current")});$("#bg-8").click(function(){$("body").removeClass("bg-1");$("body").removeClass("bg-3");$("body").removeClass("bg-4");$("body").removeClass("bg-5");$("body").removeClass("bg-6");$("body").removeClass("bg-7");$("body").removeClass("bg-2");$("body").removeClass("bg-9");$("body").removeClass("bg-10");$("body").addClass("bg-8");$.cookie("mycookie","bg-8");$(".pattern").removeClass("current");$(this).addClass("current")});$("#bg-9").click(function(){$("body").removeClass("bg-1");$("body").removeClass("bg-3");$("body").removeClass("bg-4");$("body").removeClass("bg-5");$("body").removeClass("bg-6");$("body").removeClass("bg-7");$("body").removeClass("bg-8");$("body").removeClass("bg-2");$("body").removeClass("bg-10");$("body").addClass("bg-9");$.cookie("mycookie","bg-9");$(".pattern").removeClass("current");$(this).addClass("current")});$("#bg-10").click(function(){$("body").removeClass("bg-1");$("body").removeClass("bg-3");$("body").removeClass("bg-4");$("body").removeClass("bg-5");$("body").removeClass("bg-6");$("body").removeClass("bg-7");$("body").removeClass("bg-8");$("body").removeClass("bg-9");$("body").removeClass("bg-2");$("body").addClass("bg-10");$.cookie("mycookie","bg-10");$(".pattern").removeClass("current");$(this).addClass("current")});$("#reset").click(function(){$("body").removeClass("bg-1");$("body").removeClass("bg-2");$("body").removeClass("bg-3");$("body").removeClass("bg-4");$("body").removeClass("bg-5");$("body").removeClass("bg-6");$("body").removeClass("bg-7");$("body").removeClass("bg-8");$("body").removeClass("bg-9");$("body").removeClass("bg-10");$("body").addClass("bg-1");$.cookie("mycookie","bg-1");$(".pattern").removeClass("current");$("#bg-1").addClass("current")});if($.cookie("mycookie")){$("body").addClass($.cookie("mycookie"))}});$(document).ready(function(){function t(t){$.cookie(e,t);$("head link[id=layout]").attr("href","css/layout/"+t+".css")}var e="wide";if($.cookie(e)){t($.cookie(e))}$("#wide").click(function(){$;t("wide");$("#boxed").removeClass("current");$(this).addClass("current")});$("#boxed").click(function(){$;t("boxed");$("#wide").removeClass("current");$(this).addClass("current")});$("#reset").click(function(){$;t("wide");$("#boxed").removeClass("current");$("#wide").addClass("current")})});$(document).ready(function(){function t(t){$.cookie(e,t);$("head link[id=colors]").attr("href","css/colors/"+t+".css")}var e="yellow";if($.cookie(e)){t($.cookie(e))}$("#yellow").click(function(){$;t("yellow");$(".styleswitch").removeClass("current");$(this).addClass("current")});$("#nice").click(function(){$;t("nice");$(".styleswitch").removeClass("current");$(this).addClass("current")});$("#aqua").click(function(){$;t("aqua");$(".styleswitch").removeClass("current");$(this).addClass("current")});$("#red").click(function(){$;t("red");$(".styleswitch").removeClass("current");$(this).addClass("current")});$("#orange").click(function(){$;t("orange");$(".styleswitch").removeClass("current");$(this).addClass("current")});$("#green").click(function(){$;t("green");$(".styleswitch").removeClass("current");$(this).addClass("current")});$("#blue").click(function(){$;t("blue");$(".styleswitch").removeClass("current");$(this).addClass("current")});$("#reset").click(function(){$;t("yellow");$(".styleswitch").removeClass("current");$("#yellow").addClass("current")})});$(document).ready(function(){$(".switcher").animate({left:"-160px"});$(".switcher h2 a").click(function(e){e.preventDefault();var t=$(".switcher");console.log(t.css("left"));if(t.css("left")==="-160px"){$(".switcher").animate({left:"0px"})}else{$(".switcher").animate({left:"-160px"})}})})