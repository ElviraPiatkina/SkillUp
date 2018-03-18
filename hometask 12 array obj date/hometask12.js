//2. Є стрічка "Lorem ipsum dolor sit amet" вивести в консоль нову стрічку 
//в якій в кожному слові перша і остання буква у верхньому регістрі

var str = 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eos, unde vel sed nulla illum incidunt cupiditate animi nisi blanditiis nostrum quos ducimus ullam qui, adipisci iusto ex ipsum fuga.';
var arr1 = [];
arr1 = str.split(' ');
var arr2 =[];
for (var i = 0; i < arr1.length; ++i) {	
	if (arr1[i].slice(-1).match(/[a-z]/i)) {
		arr2[i] = arr1[i].toUpperCase().substring(0, 1) + arr1[i].slice(1, -1) + arr1[i].toUpperCase().slice(-1);
	} else {
		arr2[i] = arr1[i].toUpperCase().substring(0, 1) + arr1[i].slice(1, -2) + arr1[i].toUpperCase().slice(-2);
	}
}
var str2 = arr2.join(' ');
console.log(str2);

//2. Є стрічка "Lorem ipsum dolor sit amet" вивести в консоль нову стрічку 
//в якій в кожному слові перша і остання буква у верхньому регістрі

var str3 = 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eos, unde vel sed nulla illum incidunt cupiditate animi nisi blanditiis nostrum quos ducimus ullam qui, adipisci iusto ex ipsum fuga.';
var arr4 = [];
arr4 = str3.split('');
arr4[0] = arr4[0].toUpperCase();
for (var i = 0; i < arr4.length; ++i) {	
	if (arr4[i] == ' ') {
		arr4[i-1] = arr4[i-1].toUpperCase();
		arr4[i+1] = arr4[i+1].toUpperCase();
		if (!arr4[i-1].match(/[a-z]/i)) {
			arr4[i-2] = arr4[i-2].toUpperCase();
		}
	} 
}
if (arr4[arr4.length-1].match(/[a-z]/i)) {
	arr4[arr4.length-1] = arr4[arr4.length-1].toUpperCase();
} else {
	arr4[arr4.length-2] = arr4[arr4.length-2].toUpperCase();
}
var str4 = arr4.join('');
console.log(str4);


//3. Посортувати масив [0, 9, 4, -6, 13, 24, 8, 14] від більшого до меншого

var arr5 = [0, 9, 4, -6, 13, 24, 8, 14];

function sortArray(a, b) {
	if (a<b) {
		return -1;
	} else if (a>b) {
		return 1;
	} else {
		0;
	}
}
console.log(arr5.sort(sortArray).reverse());

//4. знайти суму всіх елементів масиву з попереднього прикладу
var arr6 = [0, 9, 4, -6, 13, 24, 8, 14];
var sum = 0;
for (i = 0; i < arr6.length; ++i) {
	sum += arr6[i];
}
console.log('Сума елементів масиву складає ' + sum);


/*5. Є об'єкт city = {
   "Kidder": 9920,
   "Worcester": 8349,
   "Glenshaw": 6636,
   "Ivanhoe": 5362,
   "Neibert": 1500,
   "Oceola": 470
 }
Знайти місто з набільшою кількістю населення*/

var ob_city = {
   "Kidder": 9920,
   "Worcester": 8349,
   "Glenshaw": 6636,
   "Ivanhoe": 7775362,
   "Neibert": 1500,
   "Oceola": 77470
 }

var max = 0;
var key_saved = 0; 

for (var key in ob_city) {
	if (max < ob_city[key]) {
		max = ob_city[key];
		key_saved = key;
	}
	//max = (max < ob_city[key]) ? ob_city[key] : max ;
}
console.log('Місто з найбільшою кількістю населення - ' + key_saved);


//6. Знайти скільки годин від до 6 березня 18.00

var now = new Date();
var now_ms = now.getTime();

var newDate = new Date(2018, 2, 21, 18, 0);
var new_ms = newDate.getTime();

var dif_ms = new_ms - now_ms;
var dif_hours = Math.floor(dif_ms / 1000 / 3600);
var dif_min = Math.floor(dif_ms / 1000 / 60 % 60);
var dif_s = Math.floor((dif_ms - (dif_hours*3600*1000 + dif_min*60*1000))/1000);

console.log('До моменту ' + newDate.toLocaleDateString() + ' ' + newDate.toLocaleTimeString() +  ' залишилось ' +  dif_hours + ' год. ' + dif_min + ' хв. ' + dif_s + ' сек.');