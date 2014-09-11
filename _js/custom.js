
/*
// Two methods for timers - setTimeout and SetInterval (single / repeating)

function simpleMessage() {
	alert("This is just an alert box");
}

// settimeout is in milliseconds
//setTim	eout(simpleMessage,1000);

var myImage = document.getElementById("mainImage");

var imageArray = ["_images/sea Storm.jpg","_images/still life.jpg","_images/dipawali painting.jpg"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
var intervalHandle = setInterval(changeImage,4000);

/*
myImage.onclick =  function() {
	clearInterval(intervalHandle);
};
*/


$(document).ready(function(){
	
	$(".banner #1").show("slide",{direction:"right"},500);

	 $(".banner #1").delay(5500).hide("slide",{direction:"left"},500);
	 
	var totalImages=$(".banner img").size();
	var count=2;	
	
	  
 setInterval(function(){
  // alert(totalImages);
		$(".banner #"+count).show("slide",{direction:"right"},500);
		$(".banner #"+count).delay(5500).hide("slide",{direction:"left"},500);
		
		 if(count==totalImages){
			 count=1;
		 }else{
			count=count+1;	 
			 }
	},6500);

});





