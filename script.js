window.onload=function(){
var finalArr; //Array that stores actual result to be displayed
var count; //Count of number of elements pushed into finalArr.


//*** This block of code defines all function required to perform operations mentioned in this assignment. ***

// Function to convert comma separated string values entered by user into array.
function createArr(elements){
	var arr=elements.toString().split(",");
	return arr;
}

// Function to push elements into array.
function pushElements(elements, arr) {
	var arr1=createArr(elements);
	count=arr1.length; //Count holds the number of elements pushed into our original array.
	for(val of arr1){
		arr.push(val);
	}
	return arr;
}

// Function to pop elements from array.
function popElements(arr){
	var i=0;
	for(val of arr){
		if(i<count){
			arr.pop();
		}
		i++;
	}
	return arr;
}

// This function removes 4 elements starting from the first index.
function extractElements(arr){
	var i=1;
	arr.splice(i,4);
	return arr;
}

// This function uses FOR OF loop to iterate our array and display elements.
function displayArray(arr){
	console.log("Your new array: ");
	for (const value of arr) {
  		console.log(value);
	}
}

// *** End of function definitions ***

var tempArr; //Intermediate array to help modify our finalArr.

// Step 1: Create our original array and display.
tempArr=window.prompt("Enter the array elements (separated by commas) you wish to create:");
finalArr=createArr(tempArr);
displayArray(finalArr);

// Step 2: Insert additional elements into array.
tempArr=window.prompt("Enter the 4 elements (separated by commas) you wish to push to your array:");
finalArr=pushElements(tempArr, finalArr);
displayArray(finalArr);

// Step 3: Pop the elements pushed in step 2.
console.log("Popping the elements you just pushed...");
finalArr=popElements(finalArr);
displayArray(finalArr);

// Step 4: Extract elements from index 1 to 4.
console.log("Extracting elements from 1st to 4th index...");
finalArr=extractElements(finalArr);
displayArray(finalArr);
}