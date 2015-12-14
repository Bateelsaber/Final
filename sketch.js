var currentScene = "one";
var positionleft = -5;
var positionright = 800;
var wpositionleft = -5;
var wpositionright = 800;
var roombackground;
var potteryone;
var potterytwo;
var colsedoor;
var womanmad;
var giveup;
var bebrave;
var or;
var riyadhbackground;
var womansad;
var bedaring;
var stoptrying;
var manwalkingone;
var manwalkingtwo;
var manwalkingthree;
var womanback;
var omanwalkingone;
var omanwalkingtwo;
var omanwalkingthree;
var worldbackground;
var worldmanone;
var worldmantwo;
var worldmanthree;
var oworldmanone;
var oworldmantwo;
var oworldmanthree;
var oworldwomanone;
var oworldwomantwo;
var oworldwomanthree;
var womanworldone;
var womanworldtwo;
var womanworldthree;
var mess;
var horma;
var uf;
var no;
var cant;
var ter;
var muslim;
var hijab;
var clothes;
var kitchen;
var counter


function preload() {
  roombackground = loadImage("images/roombackground.jpg");
  potteryone = loadImage("images/potteryone.png");
  potterytwo = loadImage("images/potterytwo.png");
  closedoor = loadImage("images/closedoor.png");
  opendoor = loadImage("images/opendoor.png");
  womanmad = loadImage("images/womanmad.png");
  giveup = loadImage("images/giveup.png");
  bebrave = loadImage("images/bebrave.png");
  or = loadImage("images/or.png");
  riyadhbackground = loadImage("images/Riyadhwomanback.jpg");
  womansad = loadImage("images/womansad.png");
  bedaring = loadImage("images/bedaring.png");
  stoptrying = loadImage("images/stoptrying.png");
  manwalkingone = loadImage("images/manwalkingone.png");
  manwalkingtwo = loadImage("images/manwalkingtwo.png");
  manwalkingthree = loadImage("images/manwalkingthree.png");
  womanback = loadImage("images/womanback.png");
  omanwalkingone = loadImage("images/omanwalkingone.png");
  omanwalkingtwo = loadImage("images/omanwalkingtwo.png");
  omanwalkingthree = loadImage("images/omanwalkingthree.png");
  worldbackground = loadImage("images/world_background.jpg");
  worldmanone = loadImage("images/worldmanone.png");
  worldmantwo = loadImage("images/worldmantwo.png");
  worldmanthree = loadImage("images/worldmanthree.png");
  oworldmanone = loadImage("images/oworldmanone.png");
  oworldmantwo = loadImage("images/oworldmantwo.png");
  oworldmanthree = loadImage("images/oworldmanthree.png");
  oworldwomanone = loadImage("images/wwomanone.png");
  oworldwomantwo = loadImage("images/wwomantwo.png");
  oworldwomanthree = loadImage("images/wwomanthree.png");
  womanworldone = loadImage("images/womanonew.png");
  womanworldtwo = loadImage("images/womantwow.png");
  womanworldthree = loadImage("images/womanthreew.png");
  mess = loadImage("images/mess.png");
  horma = loadImage("images/horma.png");
  uf = loadImage("images/uff.png");
  no = loadImage("images/no.png");
  cant = loadImage("images/cant.png");
  ter = loadImage("images/ter.png");
  muslim = loadImage("images/muslim.png");
  hijab = loadImage("images/hijab.png");
  clothes = loadImage("images/clothes.png");
  kitchen = loadImage("images/kitchen.png");
  counter = loadImage("images/counter.png");
}

function setup() {
 createCanvas(800, 600);
}
function draw() {
	if (currentScene === "one") {
		drawOne();
	} else if (currentScene === "oneone") {
		drawOneone();
	}
	else if (currentScene === "oneoneone") {
		drawOneoneone();
	}
		else if (currentScene === "two") {
		drawTwo();
	}
		else if (currentScene === "giveupone") {
		drawGiveupone();
	}
			else if (currentScene === "three") {
		drawThree();
	}
	cursor(HAND);
}


function drawOne() {
  //first scene - room background
  image( roombackground, 0, 0);
  
  // pottery on random to show movement
  		var potterychange = random(1);
		if (potterychange < 0.5) {
			image(potteryone, 537, 405);
		} else {
			image(potterytwo, 537, 405);
		}
  
  // closed door
  image (closedoor, 20, 30);
  
  	if (mouseY < 400
  	&& mouseY > 20
  	&& mouseX < 250
  	&& mouseX > 20) {
		image (closedoor, random(18,22), 30);
	}
}
	
	
	function drawOneone() {
  //first scene - room background
  image( roombackground, 0, 0);
  
  // pottery on random to show movement
  		var potterychange = random(1);
		if (potterychange < 0.5) {
			image(potteryone, 537, 405);
		} else {
			image(potterytwo, 537, 405);
		}
  
  // closed door
  image (opendoor, 20, 30);
  image (mess, 160, 40);
}


function drawOneoneone() {
	// color the background
	background(140, 134, 169);
	//Setup white circles
	noFill();
	for (var i = 0; i < 100; i++) {
		stroke(0, random(100,230), random(20,170));
		strokeWeight(10);
		ellipse(380, 310, i * 18, i * 18);
	}

	//Setup circles
	noFill();
	for (var n = 0; n < 100; n++) {
		stroke(0, random(100, 230), random(20,170));
	  strokeWeight(10);
		ellipse(380, 310, n * 36, n * 36);
	}
  image (womansad, 250, 280);
  image (bedaring, 100, 110);
  image (or, 340, 130);
  image (giveup, 530, 110);
}


function drawTwo () {
  // scene after clicking be daring;
  frameRate (5);
  image (riyadhbackground, 0, 0);
  
  positionleft = positionleft + 10;
  positionright = positionright -8;
  
  	if (positionleft > windowWidth) {
		positionleft = -5;
	}
			var manwalk = random(1);
		if (manwalk < 0.3) {
			image(manwalkingone, positionleft, 405);
			scale(0.7, 0.7);
			image (no, positionleft-100, 320);
		}else if (manwalk > 0.3 && manwalk < 0.6){
			image(manwalkingtwo, positionleft -25, 405);
			scale(0.7, 0.7);
			image (no, positionleft-100, 320);
		}
		else if (manwalk > 0.6 ){
			image(manwalkingthree, positionleft, 405);
			scale(0.7, 0.7);
			image (no, positionleft-100, 320);
		}
		
		  	if (positionleft > windowWidth) {
		positionleft = -55;
	}
			var manwalk = random(1);
		if (manwalk < 0.3) {
			image(manwalkingone, positionleft -150, 405);
			image(uf, positionleft+100, 490);
		}else if (manwalk > 0.3 && manwalk < 0.6){
			image(manwalkingtwo, positionleft -175, 405);
			image(uf, positionleft+100, 490);
		}
		else if (manwalk > 0.6 ){
			image(manwalkingthree, positionleft-150, 405);
			image(uf, positionleft+100, 490);
		}
		
		  	if (positionright > windowWidth) {
		positionright = 805;
	}
				var omanwalk = random(1);
		if (omanwalk < 0.3) {
			image(omanwalkingone, positionright + 250, 520);
			image(horma, positionright-50, 300);
		}else if (omanwalk > 0.3 && omanwalk < 0.6){
			image(omanwalkingtwo, positionright + 225, 520);
			image(horma, positionright-50, 300);
		}
		else if (omanwalk > 0.6 ){
			image(omanwalkingthree, positionright + 250, 520);
			image(horma, positionright-50, 300);
		}

		  	if (positionright > windowWidth) {
		positionright = 800;
	}
				var omanwalk = random(1);
		if (omanwalk < 0.3) {
			image(omanwalkingone, positionright, 400);
			scale(1.7, 1.7);
			image(cant, positionright-250, 240);
		}else if (omanwalk > 0.3 && omanwalk < 0.6){
			image(omanwalkingtwo, positionright -25, 400);
			scale(1.7, 1.7);
			image(cant, positionright-250, 240);
		}
		else if (omanwalk > 0.6 ){
			image(omanwalkingthree, positionright, 400);
			scale(1.7, 1.7);
			image(cant, positionright-250, 240);
		}
		
		image (womanback, 198, 200);

				if (positionright < 400) {
				  scale (0.9,0.9);
			background(140, 134, 169);
	//Setup white circles
	noFill();
	for (var i = 0; i < 100; i++) {
		stroke(0, random(140,230), random(90,210));
		strokeWeight(10);
		ellipse(380, 310, i * 18, i * 18);
	}

	//Setup circles
	noFill();
	for (var n = 0; n < 100; n++) {
		stroke(0, random(140, 230), random(90,210));
	  strokeWeight(10);
		ellipse(380, 310, n * 36, n * 36);
	}
  image (womanmad, 250, 280);
  image (bebrave, 100, 110);
  image (or, 340, 130);
  image (stoptrying, 500, 110);
}
}


function drawThree () {
  // scene after clicking be brave;
  frameRate (5);
  image (worldbackground, 0, 0);
  
  
  wpositionleft = wpositionleft + 10;
  wpositionright = wpositionright -8;
  
  	if (wpositionleft > windowWidth) {
		wpositionleft = -5;
	}
			var wmanwalk = random(1);
		if (wmanwalk < 0.3) {
			image(worldmanone, wpositionleft, 405);
			scale(0.7, 0.7);
			image (hijab, wpositionleft-100, 320);
		}else if (wmanwalk > 0.3 && wmanwalk < 0.6){
			image(worldmantwo, wpositionleft -25, 405);
			scale(0.7, 0.7);
			image (hijab, wpositionleft-100, 320);
		}
		else if (wmanwalk > 0.6 ){
			image(worldmanthree, wpositionleft, 405);
			scale(0.7, 0.7);
			image (hijab, wpositionleft-100, 320);
		}
		
		  	if (wpositionleft > windowWidth) {
		wpositionleft = -55;
	}
			var wmanwalk = random(1);
		if (wmanwalk < 0.3) {
			image(oworldwomanone, wpositionleft -150, 405);
			image(muslim, wpositionleft+100, 490);
		}else if (wmanwalk > 0.3 && wmanwalk < 0.6){
			image(oworldwomantwo, wpositionleft -175, 405);
			image(muslim, wpositionleft+100, 490);
		}
		else if (wmanwalk > 0.6 ){
			image(oworldwomanthree, wpositionleft-150, 405);
			image(muslim, wpositionleft+100, 490);
		}
		
		  	if (wpositionright > windowWidth) {
		wpositionright = 805;
	}
				var owmanwalk = random(1);
		if (owmanwalk < 0.3) {
			image(womanworldone, wpositionright + 250, 520);
			image(ter, wpositionright-50, 300);
		}else if (owmanwalk > 0.3 && owmanwalk < 0.6){
			image(womanworldtwo, wpositionright + 225, 520);
			image(ter, wpositionright-50, 300);
		}
		else if (owmanwalk > 0.6 ){
			image(womanworldthree, wpositionright + 250, 520);
			image(ter, wpositionright-50, 300);
		}

		  	if (wpositionright > windowWidth) {
		wpositionright = 800;
	}
				var owmanwalk = random(1);
		if (owmanwalk < 0.3) {
			image(oworldmanone, wpositionright, 400);
			scale(1.7, 1.7);
			image(clothes, wpositionright-250, 240);
		}else if (owmanwalk > 0.3 && owmanwalk < 0.6){
			image(oworldmantwo, wpositionright -25, 400);
			scale(1.7, 1.7);
			image(clothes, wpositionright-250, 240);
		}
		else if (owmanwalk > 0.6 ){
			image(oworldmanthree, wpositionright, 400);
	scale(1.7, 1.7);
	image(clothes, wpositionright-250, 240);
		}
		image (womanback, 198, 200);
		
		
				if (wpositionright < 400) {
				  scale (0.9,0.9);
			background(140, 134, 169);
	//Setup white circles
	noFill();
	for (var i = 0; i < 100; i++) {
		stroke(0, random(140,230), random(90,210));
		strokeWeight(10);
		ellipse(380, 310, i * 18, i * 18);
	}

	//Setup circles
	noFill();
	for (var n = 0; n < 100; n++) {
		stroke(0, random(140, 230), random(90,210));
	  strokeWeight(10);
		ellipse(380, 310, n * 36, n * 36);
	}
  image (womanmad, 250, 280);
}
		
}


function drawGiveupone () {
  // scene after clicking give up
 image(kitchen, 0, 0);
 image(womansad, 300, 150);
 image(counter, 0, 0);
}

	
  function mouseReleased() {
	if (currentScene === "one"
	&& mouseY < 400
  	&& mouseY > 20
  	&& mouseX < 250
  	&& mouseX > 20) {
		currentScene = "oneone";
 	} 
 	else if (currentScene === "oneone"
 	&& mouseY < 500
  	&& mouseY > 250
  	&& mouseX < 750
  	&& mouseX > 450) {
		currentScene = "oneoneone";
 	}
  	else if (currentScene === "oneoneone"
 	&& mouseY < 240
  	&& mouseY > 110
  	&& mouseX < 220
  	&& mouseX > 100) {
		currentScene = "two";
 	}
 	   else if (currentScene === "oneoneone"
 	&& mouseY < 240
  	&& mouseY > 110
  	&& mouseX < 630
  	&& mouseX > 520) {
		currentScene = "giveupone";
 	}
 	  	else if (currentScene === "two"
 	  	&& positionright < 300
   	&& mouseY < 240
  	&& mouseY > 110
  	&& mouseX < 220
  	&& mouseX > 100) {
		currentScene = "three";
 	}
 	 	   else if (currentScene === "two"
 	 	   && positionright < 300
 	&& mouseY < 240
  	&& mouseY > 110
  	&& mouseX < 630
  	&& mouseX > 520) {
		currentScene = "giveupone";
 	}
}
