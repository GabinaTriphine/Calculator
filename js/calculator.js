let inputOne = '';
let inputTwo = '';
let operation = null;
let result = null;
let display= document.getElementById("display");

const getNumber = number => {
	
	if (!inputTwo && !operation && !result ){
		inputOne += number;
		display.value=inputOne;
	}else if (inputOne && operation && !result){
		inputTwo = inputTwo + number;
		display.value = inputTwo;

	}else if (result && operation){
		inputOne= result;
		inputTwo ='';
		inputTwo = inputTwo + number;
		display.value = inputTwo;

	}
	
};

	const getOperation = op => {
//set operation 
	operation = op
	
	};

	const getResult = () => {
		//perform task
		switch(operation){
			case "addButton": return(display.value = result= parseInt(inputOne)+ parseInt(inputTwo))
			case "substractButton": return(display.value = result= parseInt(inputOne)- parseInt(inputTwo))
			case "multiplyButton": return(display.value = result= parseInt(inputOne)* parseInt(inputTwo))
			case "divideButton": return(display.value = result= parseInt(inputOne)/ parseInt(inputTwo))
			default:return null;
		}

	};

	const resetAll = () => {
		//set everything their initial values
		inputOne = '';
		inputTwo = '';
		document.getElementId('display').value = ''
	    operation = null;
        result = null;
        

	};