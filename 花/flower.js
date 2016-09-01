// JavaScript Document
;(function(w,d,u,$){
	$.fn.showPic=function(options){
			var defaults={
				flakeChar:"&#10047;",
				minSize:10,
				maxSize:200,
				newOw:100,
				flakeColor:['pink','blue','green']
				};
				$.extend(defaults,options);
				var $flake=$("<div></div>").css({"position":"absolute","top":"-50"});
				var documentHeight=$(d).height();
				var documentWidth=$(d).width();
				$flake.html(defaults.flakeChar);
				setInterval(function(){
					var startPositionLeft=Math.random()*documentWidth-100;
					var startOpacity=Math.random()*0.5;//透明度
					var sizeFlake=defaults.minSize+Math.random()*defaults.maxSize;//雪花大小
					var endPositionLeft=startPositionLeft-100+Math.random()*200;
					var endPositionTop=documentHeight-defaults.maxSize;
					var durationFall=documentHeight*5+Math.random()*5000;
					$flake.clone()
					.appendTo("body")
					.css({
						 left:startPositionLeft,
						 opacity:startOpacity,
						 'font-size':sizeFlake,
						 color:defaults.flakeColor
						})
					 .animate({
						 top:endPositionTop,
						 left:endPositionLeft,
						 opacity:0.1
						 },durationFall,'linear',function(){
							 $(this).remove();
							 })
					},100)
		}
 
	})(window,document,undefined,$);
	 