var pageChange = (function () {

	var current = $('#main');
	var forward = $('#intro');
	var back = $('');

	var first = function(){
		current = $('#main');
		forward = $('#intro');
		back = $('');
	};

	var toggle = function(){
		current.removeClass('active');
		$(this).addClass('active');
	};

	return {
		first : first,
		toggle : toggle
	};

}) ();




$(document).ready(function () {

	$('#arrow').onClick(e) {
		if (e.keyCode == 39) {
			console.log('right');
		
			$('.screen').each(function(i, obj) {
				if ($(obj).hasClass('active')) {
					$(this).removeClass('active');
					$(this).next().addClass('active');
					console.log('added class');
					return false;
				};
			});
		};

		if (e.keyCode == 37) {
			console.log('left');
		
			$('.screen').each(function(i, obj) {
				if ($(obj).hasClass('active')) {
					$(this).removeClass('active');
					$(this).prev().addClass('active');
					console.log('added class');
					return false;
				};
			});
		};
	});

	$(document).on('keydown', function(e) {
		if (e.keyCode == 39) {
			console.log('right');
		
			$('.screen').each(function(i, obj) {
				if ($(obj).hasClass('active')) {
					$(this).removeClass('active');
					$(this).next().addClass('active');
					console.log('added class');
					return false;
				};
			});
		};

		if (e.keyCode == 37) {
			console.log('left');
		
			$('.screen').each(function(i, obj) {
				if ($(obj).hasClass('active')) {
					$(this).removeClass('active');
					$(this).prev().addClass('active');
					console.log('added class');
					return false;
				};
			});
		};
	});

});








