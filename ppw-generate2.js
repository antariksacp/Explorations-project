var canv;
var slider;

function setup(){
	canv = createCanvas(1100,1000);
	canv.position(300,1300);
	input = createInput('');
	input.position(100,1300);
	slider = createSlider(10, 100, 86);
	slider.position(120,1350);
}

function draw(){
	background('#dfdee0');
	ellipse(mouseX, mouseY, 10, 10);
	textSize(25);
	fill(0);
	text("YOUR AMAZING IMAGE HERE", 300, 300);
	textSize(13);
	text("Press [<] to start over.", 10, 980);
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		window.location.href = "file:///C:/Users/caris/OneDrive/Documents/GitHub/Explorations-project/perfectpictureweb.html"
	}
}