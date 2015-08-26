var numBlocks = getNumBlocks(), 
	blockSize = Math.round(500 / numBlocks),
	gridWidth = (blockSize*numBlocks)+numBlocks, 
	gridHeight = blockSize*numBlocks;

function getNumBlocks() {
	var tempSize, badSize = true;

	do {
		var tempSize = +prompt("Please specifiy a grid size between 16-64", 16);

		if (tempSize >= 16 && tempSize <= 64) {
			badSize = false;
		} else {
			alert("Your choice of " + tempSize + " is outside the specified range. Please try again.");
		}
	} while (badSize)

	return tempSize;

}

function addBlackBackground () {
	$(this).addClass('black-background');
}

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

	//added hover effect of black background when mouse enters div
	$('.block').hover(addBlackBackground);
});
