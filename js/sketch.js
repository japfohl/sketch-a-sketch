var background = {
		black: function () {
			$(this).css('background-color', 'rgb(0,0,0)')
		}, 
		random: function () {
			$(this).css('background-color', 'rgb('+getRGB()+', '+getRGB()+', '+getRGB()+')');
		}, 
	}, 
	backgroundColor = 'black'; //starts at default color of black

function getNumBlocks() {
	var tempSize, badSize = true;
	//test for proper grid size and deny if outside specified range
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

function buildGrid() {
	//set up grid dimensions
	var numBlocks = getNumBlocks(), 
	blockSize = Math.round(500 / numBlocks),
	gridWidth = (blockSize*numBlocks)+numBlocks, 
	gridHeight = blockSize*numBlocks;
	//generate grid
	for (var i = 1; i <= numBlocks; i++) {
		$('#container').append('<div class="row" id="row'+i+'"></div>');
			for (var j = 1; j <= numBlocks; j++) {
				$('#row' + i).append('<div class="block" id="block'+i+j+'"></div>');
			}
	}
	//style grid borders
	$('#container').css({'height': gridHeight, 'width': gridWidth});
	$('.row').css({'height': blockSize, 'width': gridWidth});
	$('.block').css({'height': blockSize, 'width': blockSize});
}

function getRGB() {
	return Math.floor(Math.random()*266);
}

function setBackground () {
	$('.block').mouseenter(background[backgroundColor]);
}

function restart () {
	$('#container').empty();
	buildGrid();
	backgroundColor = 'black';
	setBackground();
}

function clearGrid () {
	$('.block').css('background-color', '#fff');
}

function blackMode () {
	backgroundColor = 'black';
	setBackground();
}

function rainbowMode () {
	backgroundColor = 'random';
	setBackground();
}

$(document).ready(function() {
	buildGrid();
	setBackground();
	$('#reset').click(restart);
	$('#clear').click(clearGrid);
	$('#default').click(blackMode);
	$('#rainbow').click(rainbowMode);
});