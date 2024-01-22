let numbers=["0","1","2","3","4","5","6","7","8","9"];
let operators=["+","-","/","*"];
let specialchar=["."]
let currentInput="";
let currentOperation="";
function updatedisplay(value){
      document.querySelector("#value").innerText= value;
}


      numbers.forEach(number=>{
            let numbutton = document.getElementById(number);
            numbutton.addEventListener("click",()=>{
                  if (currentInput.length<18) {
                        currentInput+= number;
                        if (currentOperation.length+currentInput.length<=18){
                              updatedisplay(currentOperation+currentInput);
                        }
                  }
                 
            });
      });
      operators.forEach(operator=>{
            let opButton = document.getElementById(operator);
            opButton.addEventListener("click",()=>{
                  if (currentOperation.length+currentInput.length<=18) {
                        currentOperation+= currentInput + operator;
                        currentInput="";
                        updatedisplay(currentOperation);
                  }
                
            });
      });
      specialchar.forEach(decimal=>{
            let charbtn = document.getElementById(decimal);
            charbtn.addEventListener("click",()=>{
                    
                  if (currentInput.length<18) {
                    if (!currentInput.includes(decimal)) {
                        currentInput+=decimal;
                        updatedisplay(currentInput);
                   }
                  }
                  else{
                    if (currentOperation.length+currentInput.length<=18){
                              currentOperation+=currentInput+decimal;
                              currentInput = "";
                        }
                       
                        
                  }
                    updatedisplay(currentOperation+currentInput);
            });
      });
      
    
      document.querySelector(`#reset`).addEventListener("click",()=>{
            document.querySelector("#value").innerText=``;
            currentInput="";
            currentOperation="";
      });
      document.querySelector(`#del`).addEventListener("click",()=>{
            
            if(currentOperation.length > 0){
                  //remove the last character from the currentOperation
                  var newstr=currentOperation.substring(0,currentOperation.length-1);
                  document.querySelector("#value").innerText= newstr;
                  currentOperation= newstr;//update current operation for consistency
            }
            else{
                  var newstr=currentInput.substring(0,currentInput.length-1);
                  document.querySelector("#value").innerText= newstr;
                  currentInput= newstr;
            }
          
      });
      let result=0;
      document.querySelector("#result").addEventListener("click",()=>{
            if(currentInput!==""){
                  currentOperation+=currentInput;
                  try {
                        result = eval(currentOperation);
                        updatedisplay(result);
                  } catch (error) {
                        document.querySelector("#value").innerText="invalid expression";
                        currentInput="";
                        currentOperation="";
                        return;
                  }
                  currentInput=result.toString();
                  currentOperation="";
            }
      });

document.querySelector("#theme1").addEventListener('click', () => {
            // Create a new link element
            var newStylesheet = document.createElement('link');
            
            // Set attributes for the new stylesheet
            newStylesheet.rel = 'stylesheet';
            newStylesheet.type = 'text/css';
            newStylesheet.href = 'style.css'; // Replace with the path to your new stylesheet
            
            // Append the new stylesheet link to the head of the document
            document.head.appendChild(newStylesheet);
            document.getElementById("theme1").style.backgroundColor="hsl(222, 26%, 31%)";
        });
document.querySelector("#theme2").addEventListener('click', () => {
            // Create a new link element
            var newStylesheet = document.createElement('link');
            
            // Set attributes for the new stylesheet
            newStylesheet.rel = 'stylesheet';
            newStylesheet.type = 'text/css';
            newStylesheet.href = 'style2.css'; // Replace with the path to your new stylesheet
            
            // Append the new stylesheet link to the head of the document
            document.head.appendChild(newStylesheet);
            document.getElementById("theme2").style.backgroundColor="hsl(25, 98%, 40%)";
            
        });
document.querySelector("#theme3").addEventListener('click', () => {
            // Create a new link element
            var newStylesheet = document.createElement('link');
            
            // Set attributes for the new stylesheet
            newStylesheet.rel = 'stylesheet';
            newStylesheet.type = 'text/css';
            newStylesheet.href = 'style3.css'; // Replace with the path to your new stylesheet
            
            // Append the new stylesheet link to the head of the document
            document.head.appendChild(newStylesheet);
            document.getElementById("theme3").style.backgroundColor="hsl(176, 100%, 44%)";
        });




           