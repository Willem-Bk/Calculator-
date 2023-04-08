const myInput = document.getElementById("result");
        const myOperator = document.getElementById("operator");
        
        function addNumber(clickedNumber) {
        	console.log(clickedNumber);
        	myInput.value += clickedNumber;
        }
        function onClickOperator(evt){ 
            console.log(evt);
                myOperator.value=evt;
            }
        function onClickCancel(evt){
            console.log(evt);
            myInput.value="";
            myOperator.value=="";
        }
        function onClickEquals(evt){
            console.log(evt)
        }
        