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

// Create link delay for page transitions
function delay(URL) {
	setTimeout(function() {
		window.location = URL;
	}, 1000);
}

// Init quick links to begin listening
quicklink.listen();
