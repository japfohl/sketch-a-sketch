var numBlocks = +prompt("Please specifiy a grid size between 16-128"), 
	blockSize = Math.round(500 / numBlocks),
	gridWidth = (blockSize*numBlocks)+numBlocks, 
	gridHeight = blockSize*numBlocks;

$(document).ready(function() {

	//generate grid of <div>s based on numBlocks

	for (var i = 1; i <= numBlocks; i++) {
		$('#container').append('<div class="row" id="row'+i+'"></div>');
			for (var j = 1; j <= numBlocks; j++) {
				$('#row' + i).append('<div class="block" id="block'+i+j+'"></div>');
			}
	}

	//style grid elements
	$('#container').css({'height': gridHeight, 'width': gridWidth});
	$('.row').css({'height': blockSize, 'width': gridWidth});
	$('.block').css({'height': blockSize, 'width': blockSize});
});