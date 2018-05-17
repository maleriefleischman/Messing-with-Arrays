//1. Make an array of our alphabet.
var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//2. Make an array with a random length between 30 and 50
var random = new Array( 30 + Math.floor(Math.random()*20));

//3. Using the alphabet array, fill the randomly long array with random letters.
for (i=0;i<random.length;i++){
	j = Math.floor(Math.random()*26);
	random[i] = alpha[j]
	}
console.log(JSON.stringify(random));

/**4. Using our randomly long array of random letters..
    1. Get the first letter.
    2. Get the middle letter.
    3. Get the last letter. 
    4. Get the index of the         first “G” in the array.
    5. Get the index of the first sequence of JK, or return -1
    **/
    	
console.log(random[0]);
console.log(random[Math.floor(random.length / 2)]);
console.log(random[random.length-1]);


for (i=0;i<random.length;i++){
	if (random[i] == 'g'){
		console.log(i);
		break;
	}
	else if (i == random.length-1){
		console.log(-1);
		}
		
		}
		
for (i=0;i<random.length;i++){
	if (random[i] == ['j'] && random[i+1] == ['k']){
		console.log(i);
		console.log(i+1);
		break;
		}
		else if (i+1 == random.length-1){
			console.log(-1);
		}
	}


// 5. Convert all of the above into functions

//1. Make an array of our alphabet.
function getAlphabet(){
	var array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	return array;
	}
	

//2. Make an array with a random length between 30 and 50
function randomLength(min,max){
	var minMaxLength = new Array( min + Math.floor(Math.random()* (max-min))); 
	return minMaxLength;
	}
	
//3. Using the alphabet array, fill the randomly long array with random letters.
function randomAlphabet(alphabet, toFill){
	for (var i=0;i<toFill.length;i++){
		j = Math.floor(Math.random()*alphabet.length);
		toFill[i] = alphabet[j];
	}
	return toFill;
}


/**4. Using our randomly long array of random letters..
    1. Get the first letter.
    2. Get the middle letter.
    3. Get the last letter. 
    4. Get the index of the         first “G” in the array.
    5. Get the index of the first sequence of JK, or return -1
    **/
    
//  Get the first letter.
function first(array){
	var letter = array[0];
	return letter;
	}
	
// Get the middle letter.
function middle(array){
	var letter = array[Math.floor(array.length / 2)];
	return letter;
	}
	
// Get the last letter
function last(array){
	var letter = array[array.length-1]
	return letter;
	}
	
// get the index of the first 'g' in the array
function getG(array){
	for (var i=0;i<array.length;i++){
		if ( array[i] == 'g' ){
			var letter = i;
			break;
			}
		else if ( i == array.length-1){
			letter = -1;
			}
		}
		return letter;
}

// get the index of the first 'j''k' in the array
function getJK(array){
	for ( var i=0;i<array.length;i++){
		if ( array[i] == 'j' && array[i+1] == 'k' ){
			var letters = [i, i+1];
			break;
			}
		else if (i == array.length-1){
			letters = -1;
			}
		}
	return letters
}

/**
6. Make an array with a random length between 100-250 filled with randomly long randomly filled arrays (aka a matrix; use your previous functions). 
    1. Using your functions, do each of the sub items of #4 for every array in the matrix. 
    2. Make a single array by iterating through the matrix in-order. 
    3. Make a separate array by going through the matrix backwards.
    4. Swap the values of the first half of the 32nd array in the matrix with values from the 68th array of the same index.
    **/
    

var outerArray = randomLength(100,250);

for(var i=0;i<outerArray.length;i++){
outerArray[i] = randomAlphabet(getAlphabet(),randomLength(100,250));
}

//  1. Using your functions, do each of the sub items of #4 for every array in the matrix. And then turn each into an Array.

var arrayFirsts  = new Array(outerArray.length);
var arrayMiddles = new Array(outerArray.length);
var arrayLasts = new Array(outerArray.length);

for(var i=0;i<outerArray.length;i++){
	arrayFirsts[i] = first(outerArray[i]);
}


for(var i=0;i<outerArray.length;i++){
	arrayMiddles[i] = middle(outerArray[i]);
}


for(var i=0;i<outerArray.length;i++){
	arrayLasts[i] = last(outerArray[i]);
	}
	
// 2. Make a single array by iterating through the matrix in-order. 
var flattenArrayLength = 0;

for (var j=0;j<outerArray.length;j++){
flattenArrayLength = flattenArrayLength + outerArray[j].length;
	}
	
var i = 0;
	
var flattenArray = new Array(flattenArrayLength);

for(var j=0;j<outerArray.length;j++){
	for(var k=0;k<outerArray.length;k++){
	flattenArray[i] = outerArray[j][k];
	i++
}
}

// 3. Make a separate array by going through the matrix backwards.

var i = 0;

var backwardArray = new Array(flattenArrayLength);
	
for( var row=outerArray.length-1;row>=0;row--){
	for(var col=outerArray[row].length-1;col>=0;col--){
	backwardArray[i] = outerArray[row][col];
	i++;
	}
}
		

 // 4. Swap the values of the first half of the 32nd array in the matrix with values from the 68th array of the same index.

console.log(outerArray[31].slice(0,(outerArray[31].length/2)));
console.log(outerArray[67].slice(0,(outerArray[67].length/2)));

var swap32 = new Array();


for (var i=0;i<Math.floor(outerArray[31].length/2);i++){
	swap32[i] = outerArray[31][i];
	outerArray[31][i] = outerArray[67][i];
	outerArray[67][i] = swap32[i];
	}
	 

console.log(outerArray[31].slice(0,(outerArray[31].length/2)));
console.log(outerArray[67].slice(0,(outerArray[67].length/2)));


/**











console.log(outerArray[31].slice(0,(outerArray[31].length/2)));
console.log(outerArray[67].slice(0,(outerArray[67].length/2)));


**/
