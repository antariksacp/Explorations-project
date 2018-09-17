var canv
var canv;
//var api = "https://api.cognitive.microsoft.com/bing/v7.0/images";
//var apikey = "&api_key=9e7c6500467f42859c78151a3e7d4e84";
//var query = "&q=pastel";
var slider;

function setup(){
	canv = createCanvas(1000,800);
	canv.position(300,1000);
	canv = createCanvas(1100,1000);
	//canv.position(300,1300);
	//var url = api + apikey + query;
	//loadJSON(url, gotData);
	input = createInput('');

	input.position(100,1300);
	slider = createSlider(10, 100, 86);
	slider.position(120,1350);
}

function draw(){
	background('#dfdee0');
}	ellipse(mouseX, mouseY, 10, 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }