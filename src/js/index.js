require(["config"],function(){
	require(["jquery","inclou"],function($){
		var div = document.createElement("div");

		$(div).html("indexjs中的操作")
		$(".main").append(div)
	})
})