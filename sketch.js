var currentScene = "one";
var positionleft = -5;
var positionright = 800;
var wpositionleft = -5;
var wpositionright = 800;
var firstposition = -5;
var lastposition = -300;
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
var counter;
var cookone;
var cooktwo;
var stickone;
var sticktwo;
var lastscene;
var first;
var eone;
var etwo;
var ethree;
var efour;
var efive;
var esix;
var eseven;
var eeight;
var enine;
var eten;
var eeleven;
var etwelve;
var ethirteen;
var efourteen;
var efifteen;
var esixteen;
var eseventeen;
var eeighteen;
var eninteen;
var etwenty;
var etwentyone;
var etwentytwo;
var etwentythree;
var etwentyfour;
var brain;
var end;


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
  cookone = loadImage("images/cookone.png");
  cooktwo = loadImage("images/cooktwo.png");
  stickone = loadImage("images/stickone.png");
  sticktwo = loadImage("images/sticktwo.png");
  lastscene = loadImage("images/lastscene.png");
  first = loadImage("images/first.png");
  eone = loadImage("images/eone.png");
  etwo = loadImage("images/etwo.png");
  ethree = loadImage("images/ethree.png");
  efour = loadImage("images/efour.png");
  efive = loadImage("images/efive.png");
  esix = loadImage("images/esix.png");
  eseven = loadImage("images/eseven.png");
  eeight = loadImage("images/eeight.png");
  enine = loadImage("images/enine.png");
  eten = loadImage("images/eten.png");
  eeleven = loadImage("images/eeleven.png");
  etwelve = loadImage("images/etwelve.png");
  ethirteen = loadImage("images/ethirteen.png");
  efourteen = loadImage("images/efourteen.png");
  efifteen = loadImage("images/efifteen.png");
  esixteen = loadImage("images/esixteen.png");
  eseventeen = loadImage("images/eseventeen.png");
  eeighteen = loadImage("images/eeighteen.png");
  eninteen = loadImage("images/eninteen.png");
  etwenty = loadImage("images/etwenty.png");
  etwentyone = loadImage("images/etwentyone.png");
  etwentytwo = loadImage("images/etwentytwo.png");
  etwentythree = loadImage("images/etwentythree.png");
  etwentyfour = loadImage("images/etwentyfour.png");
  brain = loadImage("images/brain.png");
  end = loadImage("images/end.png")
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


function drawOne()
// adding an introduction page
{  firstposition = firstposition + 2;
	ellipse(firstposition, 10, 10, 10);
	image(first, 0, 0);
	if (firstposition > 450)
	{
	  // first scene of the story 
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
	//add images and options 
  image (womansad, 250, 280);
  image (bedaring, 100, 110);
  image (or, 340, 130);
  image (giveup, 530, 110);
}


function drawTwo () {
  // scene after clicking be daring;
  frameRate (5);
  image (riyadhbackground, 0, 0);
  // animating walking men
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
// moving to next page
				if (positionright < 400) {
				  scale (0.9,0.9);
			background(140, 134, 169);
	//Setup circles
	noFill();
	for (var i = 0; i < 100; i++) {
		stroke(0, random(140,230), random(90,210));
		strokeWeight(10);
		ellipse(380, 310, i * 18, i * 18);
	}

	//Setup more circles
	noFill();
	for (var n = 0; n < 100; n++) {
		stroke(0, random(140, 230), random(90,210));
	  strokeWeight(10);
		ellipse(380, 310, n * 36, n * 36);
	}
	// adding image and options to move to next pages
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
  
  // animating walking people
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
		
		// moving to the last scene
				if (wpositionright < 400) {
				  scale (0.9,0.9);
			background(140, 134, 169);
	//Setup circles
	noFill();
	for (var i = 0; i < 100; i++) {
			stroke(random(10,90));
		strokeWeight(10);
		ellipse(380, 310, i * 18, i * 18);
	}
	
// animate explosion

	  lastposition = lastposition + 46;
	ellipse(lastposition, 10, 10, 10);
	
		noFill();
	for (var n = 0; n < 100; n++) {
		stroke(random(90,120));
	  strokeWeight(10);
		ellipse(380, 310, n * 36, n * 36);
	}
	// placing last scene image 
  image (lastscene,-35, 0);

	if (lastposition >-300
	&& lastposition < -100) {
	image (brain, 240, 290);
	}
	 else if (lastposition >-200
	&& lastposition < -150)
 {
	  image(eone, 240, -200);
}
	else	if (lastposition >-155
	&& lastposition < -100)	
	{25
	  image(etwo, 240, -220);
	}
		else	if (lastposition >-105
	&& lastposition < -50)	
	{
	  image(ethree, 230, -230);
	}
		else	if (lastposition >-55
	&& lastposition < 0)	
	{
	  image(efour, 230, -230);
	}
		else	if (lastposition >-5
	&& lastposition < 50)	
	{
	  image(efive,230, -230);
	}
			else	if (lastposition >45
	&& lastposition < 100)	
	{
	  image(esix,230, -230);
	}
			else	if (lastposition >95
	&& lastposition < 150)	
	{
	  image(eseven,230, -230);
	}
				else	if (lastposition >145
	&& lastposition < 200)	
	{
	  image(eeight,220, -230);
	}
				else	if (lastposition >195
	&& lastposition < 250)	
	{
	  image(enine,220, -230);
	}
				else	if (lastposition >245
	&& lastposition < 300)	
	{
	  image(eten,220, -230);
	}
					else	if (lastposition >295
	&& lastposition < 350)	
	{
	  image(eeleven,220, -230);
	}
					else	if (lastposition >345
	&& lastposition < 400)	
	{
	  image(etwelve,210, -230);
	}
					else	if (lastposition >395
	&& lastposition < 450)	
	{
	  image(ethirteen,210, -230);
	}
					else	if (lastposition >445
	&& lastposition < 500)	
	{
	  image(efourteen,210, -230);
	}
					else	if (lastposition >495
	&& lastposition < 550)	
	{
	  image(efifteen,200, -230);
	}
					else	if (lastposition >545
	&& lastposition < 600)	
	{
	  image(esixteen,200, -230);
	}
					else	if (lastposition >595
	&& lastposition < 650)	
	{
	  image(eseventeen,200, -230);
	}
					else	if (lastposition >645
	&& lastposition < 700)	
	{
	  image(eeighteen,200, -230);
	}
					else	if (lastposition >695
	&& lastposition < 750)	
	{
	  image(eninteen,200, -230);
	}
					else	if (lastposition >745
	&& lastposition < 800)	
	{
	  image(etwenty,200, -230);
	}
					else	if (lastposition >795
	&& lastposition < 850)	
	{
	  image(etwentyone,200, -230);
	}
					else	if (lastposition >845
	&& lastposition < 900)	
	{
	  image(etwentytwo,220, -230);
	}
					else	if (lastposition >895
	&& lastposition < 950)	
	{
	  image(etwentythree,220, -230);
	}
					else	if (lastposition >945
	&& lastposition < 1000)	
	{
	  image(etwentyfour,250, -230);
	}
					else	if (lastposition >1000)	
	{
	  // image of the ending scene
 image (end, -30, 0);
	}
}}

function drawGiveupone () {
  frameRate(5);
  // scene after clicking give up
 image(kitchen, 0, 0);
 // animate woman stirring 
 			var cook = random(1);
		if (cook < 0.5) {
			image(cookone, 290, 100);
		} else if (cook > 0.5){
			image(cooktwo, 290, 100);
	}

 image(counter, 0, 0);
	fill(234, random(87,234), 22, 50);
	noStroke();
	for(var i = 0; i < 11; i++){
		ellipse(180 +i * 6.5, 495, 11, 11);
	}
		fill(234, random(87,234), 22, 50);
	noStroke();
	for(var i = 0; i < 11; i++){
		ellipse(353 +i * 6.5, 495, 11, 11);
	}
		if (cook < 0.5) {
		image(stickone, 372, 410);
		}else if (cook > 0.5){
		image(sticktwo, 405, 390);
		}

 
}

	// manage moving through pages when clicking the mouse
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
