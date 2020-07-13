// ==========================================================================
// Who-we-are.js
// ==========================================================================

// Change slider tab on click //

// Go to slide 1
const slideOne = document.querySelector('#youth-focused').addEventListener('click', () => {
	const bulletOne = document.querySelector('#mission-slider--pseudo-nav div:nth-child(1)');
	bulletOne.click();
});

// Go to slide 2
const slideTwo = document.querySelector('#collaborative-learning').addEventListener('click', () => {
	const bulletTwo = document.querySelector('#mission-slider--pseudo-nav div:nth-child(2)');
	bulletTwo.click();
});

// Go to slide 3
const slideThree = document.querySelector('#set-up-for-success').addEventListener('click', () => {
	const bulletThree = document.querySelector('#mission-slider--pseudo-nav div:nth-child(3)');
	bulletThree.click();
});

// Go to slide 4
const slideFour = document.querySelector('#just-in-case').addEventListener('click', () => {
	const bulletFour = document.querySelector('#mission-slider--pseudo-nav div:nth-child(4)');
	bulletFour.click();
});
