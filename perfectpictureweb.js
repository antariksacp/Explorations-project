var button;

function setup(){
	button = createButton("Syncronize");
	button.position(201,420)
}

function keyPressed(){
	if(keyCode === ENTER){
		window.location.href = "file:///C:/Users/caris/OneDrive/Documents/GitHub/Explorations-project/ppw-sync.html"
	}
}