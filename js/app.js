$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-still').hide();		
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500, 
			function() {
				$(this).hide();
				$(this).css('left', '580px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
	});
	$(document).keydown(function keyDown(e) {
		if (e.keyCode == 88) {
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
		};
	});
	$(document).keyup(function keyUp(e) {
		if (e.keyCode == 88) {
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});
	$('.street-fighter').fadeIn(
		3500,
		function(){}
	);
});
function playHadouken(){
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

