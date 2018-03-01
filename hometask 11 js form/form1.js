function adding() {

	var input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('placeholder', 'item');

	var container = document.querySelector('#container');
	var lastInput = container.lastElementChild;

	container.insertBefore(input, lastInput);
}

function removing() {

	var container = document.querySelector('#container');
	var lastInput = container.lastElementChild.previousElementSibling;
	container.removeChild(lastInput);
}


