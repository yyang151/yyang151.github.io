//Check off todos
$("ul").on("click","li", function(){


	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
});
event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//create a new li and add to ul
		
		$(this).val("");
		//getter
		//removes the function after its blank
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "  +  todoText + "</li>")
	}

});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

