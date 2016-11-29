$(document).ready(function() {


$('#filet-icon').click(function(){
	if ($('.cuts').hasClass('smaller')){
		$('.cuts').removeClass('smaller');
	}
	if ($('.cuts').hasClass('larger')){
		$('cuts').removeClass('larger');
	}
	$('.redcow').hide();
	$('.beef-description').hide();
	$('#cowloin').show();
	$('#description-container').show();
	$('#filet-description').show();
	$(".cuts").addClass('smaller');
	
	$("#filet-icon").removeClass('smaller');
	$('#filet-icon').addClass('larger');
	$('#two-overlay').addClass('activate-overlay');
})

$("#ny-icon").click(function(){

	if ($('.cuts').hasClass('smaller')){
		$('.cuts').removeClass('smaller');
	}
	if ($('.cuts').hasClass('larger')){
		$('cuts').removeClass('larger');
	}
	$('.redcow').hide();
	$('.beef-description').hide();
	$('#cowloin').show();
	$('#description-container').show();
	$('#ny-description').show();
	$(".cuts").addClass('smaller');
	
	$("#ny-icon").removeClass('smaller');
	$('#ny-icon').addClass('larger');
	$('#two-overlay').addClass('activate-overlay');
})

$("#ribeye-icon").click(function(){

	if ($('.cuts').hasClass('smaller')){
		$('.cuts').removeClass('smaller');
	}
	if ($('.cuts').hasClass('larger')){
		$('cuts').removeClass('larger');
	}
	$('.redcow').hide();
	$('.beef-description').hide();
	$('#cowrib').show();
	$('#description-container').show();
	$('#ribeye-description').show();
	$(".cuts").addClass('smaller');
	
	$("#ribeye-icon").removeClass('smaller');
	$('#ribeye-icon').addClass('larger');
	$('#two-overlay').addClass('activate-overlay');
})

$('#two-overlay').click(function(){
	$('#description-container').hide();

	if ($('.cuts').hasClass('smaller')){
		$('.cuts').removeClass('smaller');
	}
	if ($('.cuts').hasClass('larger')){
		$('.cuts').removeClass('larger');
	}

	$('.redcow').hide();
	$('#cow-blank').show();

	$('#two-overlay').removeClass('activate-overlay');


})


$('#recipe2').hover(
	function(){

	$('#recipe2-overlay').fadeIn(400);
	},

	function(){
	$('#recipe2-overlay').fadeOut(400);
	}
)

$('#recipe2').click(
	function(){
		$('#recipe1-overlay').hide();
		$('#recipe1-overlay-dup').hide();
		$('#recipe1-writeup').hide();
		$('#spotlight-image1').fadeOut(100);
		$('#recipe2-overlay-dup').show();
		$('#recipe2-writeup').show();
		$('#spotlight-image2').fadeIn(200);
	}
)

$('#recipe1').hover(
	function(){

	$('#recipe1-overlay').fadeIn(200);
	},

	function(){
	$('#recipe1-overlay').fadeOut(200);
	}
)

$('#recipe1').click(
	function(){
		$('#recipe2-overlay-dup').hide();
		$('#recipe2-writeup').hide();
		$('#spotlight-image2').fadeOut(100);
		$('#recipe1-overlay-dup').show();
		$('#recipe1-writeup').show();
		$('#spotlight-image1').fadeIn(200);

	}
)

})