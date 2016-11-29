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

	$('#two-overlay').removeClass('activate-overlay');

})


// $('#cont-container1').click(function(){
// 	$('.beef-description').hide();
// 	$('cuts').removeClass('smaller');
// 	$('cuts').removeClass('larger');
// })

})