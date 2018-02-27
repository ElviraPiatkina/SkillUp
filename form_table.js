function calc() {
	var p1 = +document.getElementById('p1').value;
	var p2 = +document.getElementById('p2').value;
	var p3 = +document.getElementById('p3').value;
	var p4 = +document.getElementById('p4').value;
	var p5 = +document.getElementById('p5').value;
	var p6 = +document.getElementById('p6').value;
	var q1 = +document.getElementById('q1').value;
	var q2 = +document.getElementById('q2').value;
	var q3 = +document.getElementById('q3').value;
	var q4 = +document.getElementById('q4').value;
	var q5 = +document.getElementById('q5').value;
	var q6 = +document.getElementById('q6').value;
	var r1 = document.querySelector('.r1');
	var r2 = document.querySelector('.r2');
	var r3 = document.querySelector('.r3');
	var r4 = document.querySelector('.r4');
	var r5 = document.querySelector('.r5');
	var r6 = document.querySelector('.r6');
	var r7 = document.querySelector('.r7');
	var r8 = document.querySelector('.r8');

		var sum1 = p1 * q1;	
		var sum2 = p2 * q2;
		var sum3 = p3 * q3;
		var sum4 = p4 * q4;
		var sum5 = p5 * q5;
		var sum6 = p6 * q6;
		var sum7 = q1 + q2 + q3 + q4 + q5 + q6;
		var sum8 = sum1 + sum2 + sum3 + sum4 + sum5 + sum6;
	
	r1.innerHTML = '$' + sum1;
	r2.innerHTML = '$' +sum2;
	r3.innerHTML = '$' +sum3;
	r4.innerHTML = '$' +sum4;
	r5.innerHTML = '$' +sum5;
	r6.innerHTML = '$' +sum6;
	r7.innerHTML = sum7;
	r8.innerHTML = '$' +sum8;

	console.log(sum1, sum2, sum3, sum4, sum5, sum6, sum7, sum8);
}
