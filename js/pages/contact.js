// ==========================================================================
// Contact.js
// ==========================================================================

const selectField = document.getElementById('Reason-for-contacting');

selectField.addEventListener('change', (event) => {
  let selectValue = document.getElementById('Reason-for-contacting').value;
	if (event.target.value === 'none' && selectField.classList.contains('selected')) {
  	selectField.classList.remove('selected');
    selectValue = selectField.value;
    } else if ( event.target.value !== 'none' && !selectField.classList.contains('selected')){
      selectField.classList.add('selected');
      selectValue = selectField.value;
    } else {
  }
});
