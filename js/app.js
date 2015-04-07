//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately

var color = $(".selected").css("background-color");

//When clicking on control list items
$(".controls li").click(function(){
	//Deselect sibling elements
	$(this).siblings().removeClass("selected");
  //Select clicked element
  	$(this).addClass("selected");
  //cache current color here
  color = $(this).css("background-color");
});


  //cache current color

  
//When "New Color" is pressed

  //Show color select or hide the color select


//update the new color span

//When color sliders change


//When "Add Color" is pressed

  //Append the color to the controls ul

  //Select the new color


//On mouse events on the canvas

  //Draw lines



  







