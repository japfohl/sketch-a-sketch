var gridSize = 16;

$(document).ready(function() {

	for (var i = 1; i <= gridSize; i++) {
		$('#container').append('<div class="row" id="row'+i+'"></div>');
			for (var j = 1; j <= gridSize; j++) {
				$('#row' + i).append('<div class="block" id="block'+i+j+'"></div>');
			}
	}

});