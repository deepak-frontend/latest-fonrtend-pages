$(document).ready(function(){
	//Initial check if an item is set to visible in the accordion
	$("#faqaccordion2 .panel-collapse").each(function(){
		if($(this).hasClass("in")){
			$(this).parent().addClass("ac-active");
			$(this).parent().find(".acc-icon").addClass("act");
		}		
	});
	//Adding/Removing active classes from accordion
	(function() {  
	  $(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
		if (e.type=='show'){
		  $(this).addClass('ac-active');
		  $(this).find(".acc-icon").addClass("act");
		}else{
		  $(this).removeClass('ac-active');
		  $(this).find(".acc-icon").removeClass("act");
		}
	  });  
	  }).call(this);
});	