 
 function shopping_commend_show(){
	  var $shopping_commend_arrow=$("#shopping_commend_arrow");
	  var $shopping_commend_sort=$("#shopping_commend_sort");
	  if($shopping_commend_sort.is(":hidden")){
		   $shopping_commend_sort.show();
		   $shopping_commend_arrow.attr("src","images/shopping_arrow_up.gif");
		  }else{
			  $shopping_commend_sort.hide();
			  $shopping_commend_arrow.attr("src","images/shopping_arrow_down.gif");
			  }
	  
	} 
/*function shopping_commend_show(){
	$("#shopping_commend_sort").toggle(function(){
		function(){
			$("#shopping_commend_arrow").attr("src","images/shopping_arrow_up.gif");
			} 
		function(){
			$("#shopping_commend_arrow").attr("src","images/shopping_arrow_down.gif");
			}
		})
	}*/
/*function buyProduct(id){
	var $1=$("#"+id+" li.shopping_commend_list_1").text();
	var $2=$("#"+id+" li.shopping_commend_list_2").text();
	var $3=$("#"+id+" li.shopping_commend_list_3").text();
	var $shopping_commend_sort=$("#shopping_commend_sort li");
	var $myTableProduct=$("#myTableProduct");
	 $myTableProduct.prepend("<tr class='shopping_product_list' id='shopping'><td class='shopping_product_list_1'>"+$1+'</td><td           class="shopping_product_list_2">'+
	 $2+"</td><td class='shopping_product_list_3'>"+
	 $3+"</td><td class='shopping_product_list_4'><label>130.70</label>(66折)</td><td class='shopping_product_list_5'><input type='text'"+"value='1"
	+ "/>'+</td><td class='shopping_product_list_6'><a href='javascript:deleteProduct('shopping') class='blue'>"+"删除</a></td></tr>'"); 
	}*/
	
function deleteProduct(id){
	var r=confirm("你确定删除本商品？")
	if(r){
	  $("#"+id).remove();
	}
	  productCount();
	}

$(function(){
	 productCount();
	})
function productCount(){ 
		var a=$(".shopping_product_list_4 label");
		var b=$(".shopping_product_list_3 label");
		var c=$(".shopping_product_list_2 label");
		var d=$(".shopping_product_list_5 input");
		var single=0;
		var market=0;
		var count=0;
		var save;
		for(var i=0;i<a.length;i++){
			 count+=($(a.get(i)).text()*($(d.get(i)).val()));
			 market+=($(b.get(i)).text()*($(d.get(i)).val()));
		     single+=($(c.get(i)).text()*($(d.get(i)).val()));
			}
		  save=market-count;
		//count=parseInt($("#myTableProduct tr .shopping_product_list_4").find("label").text());
		$(".shopping_list_end .shopping_list_end_2").find("label").text(count.toFixed(2));
		$(".shopping_list_end .shopping_list_end_4").find("label").text(save.toFixed(2));
		$("#product_integral").text(single);
		 
	}
	
function buyProduct(ulid){
	//取出表格
	var $table=$("#myTableProduct");
	var $ul=$('#'+ulid);
	var flag=-1;
	var pname=$ul.find("li:eq(0) a").html();
	var $trs=$table.find("tr");
	for(var i=0;i<$trs.length;i++){
		if($($trs[i]).find("td a").html()==pname){
			flag=i;
			break;
			}		
		}
	 if(flag==-1){
		  addTr($table,$ul);
		 }else{
			 updateNum(flag);
			 }
			productCount();
	}
function updateNum(index){
	 var num=parseInt($("#myTableProduct tr:eq("+index+")").find("td:eq(4) input").val());
	 $("#myTableProduct tr:eq("+index+")").find("td:eq(4) input").val(num+1);
	}
function addTr($table,$ul){
	 var pname=$ul.find("li:eq(0) a").html();
	 var price=$ul.find("li:eq(1)").html().substring(1);
	 var ddprice=$ul.find("li:eq(2)").html().substring(1);
	 var newid=parseInt($table.find("tr:last").attr("id").split("_")[1])+1;
	 var newtr=$table.find("tr:last").clone();
	 $(newtr).attr("id","shoppingProduct_0"+newid);
	 $(newtr).find("td:eq(0)").html("<a href='#' class='blue'>"+pname+'</a>');
	 $(newtr).find("td:eq(1) label").html((ddprice*10).toFixed(0));
	 $(newtr).find("td:eq(2) label").html(price);
	 $(newtr).find("td:eq(3)").html("￥<label>"+ddprice+"</label>("+(ddprice/price*100).toFixed(0)+"折)");
	 $(newtr).find("td:eq(4) input").val(1);
	 $(newtr).find("td:eq(5) a").attr("href","javascript:deleteProduct('shoppingProduct_06"+newid+")");
	 $table.prepend(newtr);
	}