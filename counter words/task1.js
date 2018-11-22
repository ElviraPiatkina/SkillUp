'use strict';
/**
 * Counts the number of words in a given string,
 * as well as the minimum, maximum and average number of letters in a words.
 * In the string, all characters (not letters and not numbers) are replaced with spaces
 * to correctly count the number of words and letters in words.
 *
 * @param {string} text The text entered by the user in the text-area.
 * @param {number} count Displays ​the ​number ​of ​words ​in ​the ​text.
 * @param {number} max ​Displays ​the ​number ​of ​letters ​in ​the ​longest word.
 * @param {number} min Displays ​the ​number ​of ​letters ​in ​the ​shortest word.
 * @param {number} ave ​​Displays ​the ​average number of letters in words.
 */
function calc(text) {
	var text = document.getElementById('text').value;
	var count = document.querySelector('.count');
	var max = document.querySelector('.max');
	var min = document.querySelector('.min');
	var ave = document.querySelector('.ave');

	// Replacing \s-characters with spaces to correctly count
	var arr = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split(" ");

	// Creating new array with elememts that length > 0
	var tempArr = [];
	var arr_length = arr.length;
	for (var i = 0; i < arr_length; i++) {
		if (arr[i].length > 0) {
			tempArr.push(arr[i]);
		};
	};

	// Sorting new array for ease of operation with max and min
	tempArr.sort(function(a, b){
		return a.length - b.length;
	});

	var words_count = tempArr.length;
	var min_word = tempArr[0].length;
	var max_word = tempArr[words_count - 1].length;
	var ave_word = tempArr.join("").length / words_count;

	count.innerHTML = words_count;
	min.innerHTML = min_word;
	max.innerHTML = max_word;
	ave.innerHTML = ave_word;
};

