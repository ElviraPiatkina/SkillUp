
/**
 * find a random number in the range from min to max
 * @param {number} min
 * @param {number} max
 * @returns {number} random number in the range from min to max
 */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * creating an array of objects with random values of the sides
 * @param {number} len the array length - the number of quadrangles
 * @returns {Array} array of objects (quadrangles)
 */
function createQuadrangleArray(len){
    for(var i = 1, arr = []; i <= len; i++) {
        arr.push({'top': getRandomIntInclusive(1,3), 'bottom': getRandomIntInclusive(1,3),
                'left': getRandomIntInclusive(1,3), 'right': getRandomIntInclusive(1,3),});
    }
    return arr;
}
let qArr = createQuadrangleArray(100);
console.log('Array of quadrangles:', qArr);

/**
 * find a random number in the range from min to max
 * @param {number} i array iterator
 * @returns {Object} {perimeter: perimeter's_value}
 */
let perimetersArr = qArr.map(function(i) {
   return {'perimeter': (i.top + i.bottom + i.left + i.right)};
});
console.log('Perimeters array:', perimetersArr);

/**
 * accumulation (counting) of quadrilaterals by categories
 * @param {Array} arr array with quadrangle's parameters
 * @returns {Object} object wicth types of quadrangles and their count
 */
function categorization(arr) {
    let tempArr = [];
    for (let i in arr) {
        if (arr[i].top == arr[i].bottom && arr[i].left == arr[i].right && arr[i].top == arr[i].left) {
            tempArr.push("Squares");
        } else if (arr[i].top == arr[i].bottom && arr[i].left == arr[i].right) {
            tempArr.push("Rectangles");
        } else {
            tempArr.push("Arbitrary_quadrangles");
        };
    };

    const count = tempArr.reduce( (acc, item) => {
        acc[item] = (acc[item] || 0) + 1 ;
        return acc;
    } , {})
    console.log('Categorization of quadrangles:', count);
}
let countQuard = categorization(qArr);

