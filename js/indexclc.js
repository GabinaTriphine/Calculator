let inputOne= '';
let inputTwo= '';
let result= null;
let operation= null;
let display= document.getElementById('display')

const getNumber = number => {

	if(!inputTwo && !operation && !result){
		inputOne += number;
		display.value=inputTwo;
	}
	else if(inputOne && operation && !result){
		inputTwo =inputTwo + number;
		display.value = inputTwo;
	}
	else if (result && operation){
		inputOne= result;
		inputTwo='';
		inputTwo=inputTwo+number;
		display.value=inputTwo;
	}

};

const getOperation = op =>{
	operation=op
};

const result = () =>{

	switch (operation)
	{
		case "addbutton" return:(display.value = result = parsInt(inputOne) + parsInt(inputTwo));
	    case "substractbutton" return:(display.value = result = parsInt(inputOne) + parsInt(inputTwo));
	    case "divideButton" return:(display.value = result = parsInt(inputOne) + parsInt(inputTwo));
	    case "multiplyButton" return:(display.value = result = parsInt(inputOne) + parsInt(inputTwo));
	    default return: null;
	}

};

const resetAll = () =>{
	inputOne= '';
	inputTwo= '';
    result= null;
    operation= null;
    display.value='';
};

