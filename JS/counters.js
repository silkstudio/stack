
import { CountUp } from 'https://cdn.jsdelivr.net/gh/silkstudio/Stack/JS/countUp/countUp-min.js';


// Get counter elements

const counterOne = document.getElementById('counter-1');
const counterTwo = document.getElementById('counter-2');
const counterThree = document.getElementById('counter-3');
const counterFour = document.getElementById('counter-4');



const countUp = new CountUp(counterOne, 5234);





// Define function to check if element is in viewport

function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    let viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}







// Define scroll function

 $(window).on('scroll',function() {
    if (checkVisible($(counterOne))) {
 
          if (!countUp.error) {
            countUp.start();
          } else {
            console.error(countUp.error);
          }

        $(window).off('scroll');
    } else {
        // do nothing
    }
});




    



