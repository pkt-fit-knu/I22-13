function main(){	
	var treesNumber = Math.floor((Math.random() * 10) + 1);
	var trees = [];
	
	for (var i = 0; i < treesNumber; i++){
		var size = Math.floor((Math.random() * 20) + 5);
		trees.push(new Tree(size));
	}
	
	for(var i = 0; i < trees.length; i++)
		drawTrees(trees[i]);
	
}

function Tree(rx) {
	this.rx = rx;
    this.x = 1.2*rx;
    this.y = 1.3*rx;
	this.ry = 0.9*this.y;
	this.length = 0.6*rx;	
}


function drawTrees(Tree){
	var drawingCanvas = document.getElementById('idCanvas');
    
    var context = drawingCanvas.getContext('2d');
	var ranomX = Math.floor((Math.random() * 1200) + 1);
	var randomY = Math.floor((Math.random() * 600) + 1);
	
	context.fillStyle = "Sienna";
	context.fillRect(Tree.x + Tree.length / 2 + ranomX, Tree.y + Tree.ry + randomY, Tree.x +  Tree.rx + Tree.length, Tree.y + Tree.ry + Tree.length);
	
	context.fillStyle = "ForestGreen";

	context.beginPath();
	context.ellipse(Tree.x + ranomX + Tree.length*2.5, Tree.y + randomY, Tree.rx*3, Tree.ry*2.5, 0 * Math.PI/180, 0, 2 * Math.PI);
	context.stroke();
	context.fill();

	
	
}