
var slideList = document.getElementById('slideList'),
items = document.getElementsByClassName('items'),
sliderListLength = items.length,
counter = 0,
nextArrow = document.getElementById('date-nav-next'),
prevArrow = document.getElementById('date-nav-prev');

nextArrow.addEventListener("click", callNext);
prevArrow.addEventListener("click", callPrev);


function callNext(){
	if(counter < sliderListLength-1){
		slideList.style.transform += "translateX(-300px)";
		slideList.style.transition = "3s";
		counter++;
	}	
	
}

function callPrev(){
	if(counter > 0){
		slideList.style.transform += "translateX(300px)";
		slideList.style.transition = "3s";
		counter--;
	}	
}