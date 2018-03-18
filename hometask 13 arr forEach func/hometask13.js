//Є двовимірний масив 
//arr = [[0, 2, 8, 1], [8, 12, 97, 42], [6, 25, 10, -6], [5, 32, 20, -9]]; 
//Знайти максимальний елемент використовуючи forEach


var arr = [[0, 2, 8, -1111], [8, 112, 97, 42], [6, 25, 10, -6], [5, 32, 20, -9]]; 

var max = 0;
arr.forEach(function(item, i) {
	arr.forEach(function(item, j){
		max = (max < arr[i][j])? max = arr[i][j]: max; 
	})    	
});
console.log('Максимальний елемент массиву: ' + max);


//Написати функцію яка приймає параметр число n і повертає 
//масив чисел від 0 до n з кроком 1 (edited)

var n = 12;

function createArray() {
	var new_array = [];
	for (i = 0; i <= n; ++i) {
		new_array[i] = i;
	};
	return new_array;
};

console.log(createArray());