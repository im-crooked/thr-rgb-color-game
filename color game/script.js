var easynum = 3;
var hardnum = 6;
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pikdcolor = pickcolor();
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var refresh = document.querySelector("#refresh");

var span =document.querySelector("span");
span.innerHTML = "<b>"+pikdcolor + "</b>" ;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];


	squares[i].addEventListener("click",function () {
		// body...

		var clickedColor = this.style.backgroundColor;

		if(clickedColor!=pikdcolor){
			this.style.backgroundColor = "#232323";
			message.textContent = "try again";
		}
		else{
			message.textContent = "you won";
			changeColor();
			refresh.textContent = "PLAY AGAIN";
			

		}
	});
}

function changeColor() {
	// body...
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = pikdcolor;
	}
	h1.style.backgroundColor=pikdcolor;
}

function pickcolor() {
	// body...
	var num = Math.floor(Math.random()*colors.length);
	return colors[num];
}

function generateRandomColors(num) {
	// body...
	var arr = []

	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}

	return arr;

}

function randomColor() {
	// body...
	var x = Math.floor(Math.random()*256);
	var y = Math.floor(Math.random()*256);
	var z = Math.floor(Math.random()*256);
	var result = "rgb("+x+", "+y+", "+z+")";

	return result;
}

refresh.addEventListener("click",function () {
	// body...
	colors = generateRandomColors(6);
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	pikdcolor = pickcolor();
	h1.style.backgroundColor = "steelbue";
	span.innerHTML = "<b>"+pikdcolor + "</b>" ;
	message.textContent="";
});

easy.addEventListener("click",function (easynum) {
	// body...
	colors = generateRandomColors(easynum);
	pikdcolor = pickcolor();

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click",function () {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor!=pikdcolor){
				this.style.backgroundColor = "#232323";
				message.textContent = "try again";
			}
			else{
				message.textContent = "you won";
				changeColor();
				refresh.textContent = "PLAY AGAIN";
			}
		});
	}
})

