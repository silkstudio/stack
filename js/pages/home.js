// ==========================================================================
// Home.js
// ==========================================================================

// Counters //

// Get elements to count
const elementOne = document.getElementById('counter-trigger-1');
let elementOneHeight = elementOne.clientHeight;
const elementTwo = document.getElementById('counter-trigger-2');
let elementTwoHeight = elementTwo.clientHeight;
const elementThree = document.getElementById('counter-trigger-3');
let elementThreeHeight = elementThree.clientHeight;
const elementFour = document.getElementById('counter-trigger-1');
let elementFourHeight = elementFour.clientHeight;


// Create counters
let countUpOne = new CountUp('counter-1', 0, 57, 0, 4, options);
let countUpTwo = new CountUp('counter-2', 0, 62, 0, 4, options);
let countUpThree = new CountUp('counter-3', 0, 41, 0, 4, options);
let countUpFour = new CountUp('counter-4', 0, 77, 0, 4, options);

const options = {
	useEasing: true
};


// Listen for scroll
document.addEventListener('scroll', counters);


// Check if element is in view
function inView(element, elementHeight) {
	var windowHeight = window.innerHeight;
	var scrollY = window.scrollY || window.pageYOffset;
	var scrollPosition = scrollY + windowHeight;
	var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
	if (scrollPosition > elementPosition) {
		return true;
	}

	return false;
}

// Run counters when elements are in view
function counters() {
	if (inView(elementOne, elementOneHeight)) {
		setTimeout(function(){
    	countUpOne.start();
		}, 200); 
	}
	if (inView(elementTwo, elementTwoHeight)) {
  	setTimeout(function(){
    	countUpTwo.start();
		}, 200);
   }
	if (inView(elementThree, elementThreeHeight)) {
		 setTimeout(function(){
    	countUpThree.start();
		}, 200);
	}
	if (inView(elementFour, elementFourHeight)) {
		 setTimeout(function(){
    	countUpFour.start();
		}, 200);
	}
}
