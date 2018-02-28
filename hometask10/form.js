function calc(s) {
	var n1 = +document.getElementById('n1').value;
	var n2 = +document.getElementById('n2').value;
	var res = document.querySelector('.rezult');
	
	if (s === 1) {
		var r = n1 * n2;
	} else if (s === 2) {
		var r = n1 / n2;
	} else if (s === 3) {
		var r = n1 + n2;
	} else {
		var r = n1 - n2;
	}

	res.innerHTML = r;
	console.log(r);
}
