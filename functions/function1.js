// functions for exc 1

var showTheHigher = function() {
	var num1 = document.getElementById("firstNum").value;
	var num2 = document.getElementById("secNum").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	if (num1 > num2) {
		document.getElementById("higherNum").innerHTML = "The Higher number is :" + num1;
	} else if (num1 < num2) {
		document.getElementById("higherNum").innerHTML = "The Higher number is :" + num2;
	} else {
		document.getElementById("higherNum").innerHTML = "The numbers are equal";
	}
};

// functions for exc 2

var sortNums = function() {
	var num1 = document.getElementById("sortfirstNum").value;
	var num2 = document.getElementById("sortsecNum").value;
	var num3 = document.getElementById("sortthirdNum").value;
	var sortedArray = [3];
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	num3 = parseInt(num3);
	// we can do another sort function with for for all arrays
	// but for now I will use if for sort this small array
	if (num1 >= num2 && num1 >= num3 && num2 >= num3) {
		sortedArray[0] = num1;
		sortedArray[1] = num2;
		sortedArray[2] = num3;
	} else if (num1 >= num2 && num1 >= num3 && num2 <= num3) {
		sortedArray[0] = num1;
		sortedArray[1] = num3;
		sortedArray[2] = num2;
	} else if (num2 >= num1 && num2 >= num3 && num1 >= num3) {
		sortedArray[0] = num2;
		sortedArray[1] = num1;
		sortedArray[2] = num3;
	} else if (num2 >= num1 && num2 >= num3 && num1 <= num3) {
		sortedArray[0] = num2;
		sortedArray[1] = num3;
		sortedArray[2] = num1;
	} else if (num3 >= num1 && num3 >= num2 && num1 >= num2) {
		sortedArray[0] = num3;
		sortedArray[1] = num1;
		sortedArray[2] = num2;
	} else {
		sortedArray[0] = num3;
		sortedArray[1] = num2;
		sortedArray[2] = num1;
	}

	document.getElementById("sortednums").innerHTML = sortedArray;
};

// function for exc 3
var findLetter = function() {
	var myword = document.getElementById("word").value;
	var myletter = document.getElementById("letter").value;
	var wordarray= myword.split("");
	var result=0,i,counter=0;
	
	for(i=0;i<wordarray.length;i++){
		if(wordarray[i]===myletter){
			counter++;
		}
	}
	result=counter;
	
	document.getElementById("numofletters").innerHTML = "האות " + "" + myletter + "" + " מופיעה" +" "+ result +" "+ "פעמים במילה שבחרת " ;
	

};

// function for exc 4

var showName= function(id){
	var idName= document.getElementById(id).childNodes;
	idName[1].style.display = "block";
};

var hideName= function(id){
	var idName= document.getElementById(id).childNodes;
	idName[1].style.display = "none";
};
