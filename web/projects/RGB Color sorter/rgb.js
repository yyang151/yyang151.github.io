var numSquares = 6
var colors= generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square")
var pickedColor= pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function() {
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
numSquares= 3;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent=pickedColor;
for (var i = 0; i<squares.length; i++){
	if (colors[i]){
		squares[i].style.backgroundColor = colors[i];
	}else{
		squares[i].style.display="none";
	}
}
});

hardBtn.addEventListener("click",function() {
easyBtn.classList.remove("selected");
hardBtn.classList.add("selected");
numSquares = 6;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent=pickedColor;
for (var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display="block";
		}
});

resetButton.addEventListener("click", function(){
	//generate new color + pick new color from array + change color of square
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for( var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})
colorDisplay.textContent = pickedColor;
for(var i = 0; i<squares.length; i++){
	//add intial colors
	squares[i].style.backgroundColor = colors[i];
//add click
	squares[i].addEventListener("click",function(){
		//grab color of clicked square and compare to pickedColor
	
	var clickedColor =	this.style.backgroundColor;
	if (clickedColor===pickedColor){
		messageDisplay.textContent="Correct!";
		resetButton.textContent="Play Again?";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
	}else{
		this.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again"
		
	}
	});
}

function changeColors ( color){
	//loop through all the sqaures to match color
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
var random =Math.floor(Math.random()*colors.length);
return colors[random];
}

function generateRandomColors(num) {
	//make array
	var arr = []
	//add num random colors to array
	for(var i = 0; i<num; i++){
		arr.push(randomColor())
		//get random color and push into arr

	}
	//return the array
return arr;
}
//seperate function
function randomColor(){

var r = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);


return "rgb(" + r  + ", " + g + ", " + b + ")";
}