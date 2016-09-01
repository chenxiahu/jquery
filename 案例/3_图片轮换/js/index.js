/*  var index=0;
  var myinterval;
  myinterval=setInterval("show()",1000);*/
/* 
 function show(i){
	    var lis=$("#scroll_number li"); 
		i=i%6+1; 
		$("#dd_scroll").attr("src","images/dd_scroll_"+i+".jpg");
		 lis.get(i-1).style.background="#F96";
	 }
function start(){
	   $("#scroll_number li").css("background","#f2f2f3");
	}*/
  var index=0;
  var myinterval;
function show(id){
	if(Number(id)){
		index=id;
		clearInterval(myinterval);
		}else{
			index=index%6+1; 
			}
	    var lis=$("#scroll_number li"); 
		 
		$("#dd_scroll").attr("src","images/dd_scroll_"+index+".jpg");
		$("#scroll_number >li").attr("class","scroll_number_out");
		$("#scroll_number >li").eq(index-1).addClass("scroll_number_over");
		 
		 //lis.get(index-1).style.background="#F96";
		  
	 }
 function start(){
	   myinterval=setInterval("show()",1000); 
	} 
 myinterval=setInterval("show()",1000);