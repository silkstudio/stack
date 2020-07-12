/*!
 * The Stack Project - Additional js code for site functionality
 * (c) 2020 
 * Silk Studio - development + design
 * https://silkstudio.co/
 *
 *
 * 
 * 
 * 
 */
  
// Remove inline editor styling
  const editorStyles = document.getElementById('editor-styles');  
  window.onload = () => {
	editorStyles.parentNode.removeChild(editorStyles);
  };
  
  
// Create link delay for page transitions        
  function delay (URL) {
    setTimeout( function() { window.location = URL }, 1000 );
  };
  

// Set mobile menu size
  let intViewportWidth = window.innerWidth;
  let intViewportHeight = window.innerHeight;
  const mobileNav = document.querySelector('.mobile-nav');
  mobileNav.style.height = `${intViewportHeight}px`;
  mobileNav.style.width = `${intViewportWidth}px`;

// Init smooth scroll
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (!isMobile && intViewportWidth >= 992) {
      luxy.init({
          wrapper: '#luxy',
          wrapperSpeed: 0.065
      });
  } 
  
// Init quick links
  quicklink.listen();
  
