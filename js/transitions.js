
var pageChange = (function() {

	var current = $('#main');
	var forward = $('#intro');
	var back = $('');

	var getCurrent = function() {
		current = $(this);
		forward = $(this).next();
		back = $(this).prev();
	};

	var first = function() {
		current = $('#main');
		forward = $('#intro');
		back = $('');
	};

	var right = function() {
		back = current;
		current = forward;

	};

	var left = function() {
		forward = current;
		current = back;
	};

	return {
		current : current,
		forward : forward,
		back : back,

		first : first,
		right : right,
		left : left,
		getCurrent : getCurrent,

		getNext : function () {
			current.hide();
			forward.show();
		},

		getBack : function () {
			current.hide();
			back.show();
		}
	};

}) ();


$(document).ready(function ($) {
	pageChange.first();
	$(document).on('keydown', function(e) {
		if (e.keyCode == 39) {
			console.log('right');
			pageChange.getNext();
			pageChange.right();
		};

		if (e.keyCode == 37) {
			console.log('left');
			pageChange.getBack();
			pageChange.left();
		};
	});


});





