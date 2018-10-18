var b1 = document.querySelector("#b1");
var p2Display = document.querySelector("#rscore");
var gameOver = false;
var winningScore= 270;
var p1Score = 0;
var p2Score = 0;
var b2 = document.querySelector("#b2");
var p1Display = document.querySelector("#dscore");
var resetButton = document.getElementById("reset");
var numInput=document.querySelector("input");
var score = document.getElementById("scoreId");

b1.addEventListener("click",function() {
	if(!gameOver) {
		p1Score+=2;
		if (p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

b2.addEventListener("click", function(){
	if(!gameOver){
		p2Score+=2;
		if (p2Score===winningScore){
			p2Display.classList.add("winner");
			gameOver=true;
		}
		p2Display.textContent=p2Score;
	}
});
			resetButton.addEventListener("click",function(){
				reset();
			});


function reset (){
	p1Score=0;
	p2Score=0;
	p2Display.textContent=p2Score;
	p1Display.textContent=p1Score;
	p2Display.classList.remove("winner");
	p1Display.classList.remove("winner");
	gameOver=false;
}

numInput.addEventListener("change",function () {
score.textContent= numInput.value;
winningScore=Number(numInput.value);
reset();
})

