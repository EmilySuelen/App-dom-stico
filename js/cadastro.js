function(argument) {
	// body...
document.querySelector('#estado').addEventListener('change', function(evt){
  alert('Estado: ' + evt.target.value);
});
}