function adding() {

	var container = document.querySelector('#container');
	var lastEl = container.lastElementChild;

	var div = document.createElement('div');
	div.setAttribute('id', 'element');
	container.insertBefore(div, lastEl);

	var h2 = document.createElement('h2');
	h2.innerHTML = 'Member';
	div.appendChild(h2);

	var input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('placeholder', 'item');
	input.setAttribute('id', 'input');
	div.appendChild(input);

	var button = document.createElement('button');
	button.setAttribute('name', 'remove');
	button.setAttribute('id', 'remove');
	button.setAttribute('onclick', 'this.parentNode.parentNode.removeChild(this.parentNode);');
	button.innerHTML = 'remove';
	div.appendChild(button);
}

