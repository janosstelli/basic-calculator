// Owner: Janos Stelli; @janosstelli
var number=0;
var number2=null;
var reserveNumber=null;
var solution=null; 
var operator=null;
var decimalPoint=1;
var boolDecimalPoint=false; 
var listOfOperators=[null]; 
var counterListOfOperators=1;
var returnOperators=['=','.','%','@','r','q','n'];
document.querySelector("input").value=number;
var counterListOfOperators=0;
var buttons=document.querySelectorAll(".btn")
for (var i=0; i<buttons.length;i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        var symbol=this.innerText
        equation(symbol);
    });
}

document.addEventListener('keydown', function(event) {
    equation(event.key);
});

function equation(key) {
    console.log(listOfOperators);
    switch(key) {
        
        case 'Escape':
            case 'C':
                number=0;
                number2=null;
                reserveNumber=null;
                solution=null; 
                operator=null;
                decimalPoint=1;
                boolDecimalPoint=false; 
                listOfOperators=[null];
                counterListOfOperators=1;
                document.querySelector("input").value=number;
                buttonAnimation(".escape");
                break;

        case 'Delete':
            case 'CE': 
            number=0; 
            decimalPoint=1;
            boolDecimalPoint=false;
            document.querySelector("input").value=number;
            buttonAnimation(".delete");
            break;

        case 'Backspace': 
            case 'DEL':
                if (boolDecimalPoint===false) {
                    number=Math.floor(number/10);
                } 
                else {
                    number=Number(String(number).slice(0,-1)); 
                }
                document.querySelector("input").value=number;
                buttonAnimation(".backspace");
                break;

        case 'R':
            case 'r':
                case '1/x':
                    if (returnOperators.includes(listOfOperators[listOfOperators.length-1]) === true) {
                        if (number2===0) {
                            number=0;
                            document.querySelector("input").value='ZeroDivisionError';
                        } else {
                            number=1/number2;
                            document.querySelector("input").value=number;
                        }
                    } 
                    else if (listOfOperators[listOfOperators.length-1]===null) {
                        if (number===0) {
                            number=0;
                            document.querySelector("input").value='ZeroDivisionError';
                        } else {
                            number=1/number;
                            document.querySelector("input").value=number;
                        }
                    } 
                    number2=number; 
                    number=0; 
                    listOfOperators.push('r'); 
                    counterListOfOperators++;
                    buttonAnimation(".pow_-1");
                    break;

        case 'Q':
            case 'q':
                case 'x²':
                    if (returnOperators.includes(listOfOperators[listOfOperators.length-1]) ===true) {
                        number=Math.pow(number2,2)
                    } 
                    else if (listOfOperators[listOfOperators.length-1]===null) {
                        number=Math.pow(number,2);
                    } 
                    document.querySelector("input").value=number;
                    number2=number; 
                    number=0; 
                    listOfOperators.push('number');
                    counterListOfOperators++;
                    listOfOperators.push('q'); 
                    counterListOfOperators++;
                    buttonAnimation(".squared");
                    break;
        
        case '@':
            case '√x':
                if (returnOperators.includes(listOfOperators[listOfOperators.length-1]) ===true) {
                    number=Math.sqrt(number2)
                } 
                else if (listOfOperators[listOfOperators.length-1]===null) {
                    number=Math.sqrt(number);
                } 
                document.querySelector("input").value=number;
                number2=number; 
                number=0; 
                listOfOperators.push('number');
                counterListOfOperators++;
                listOfOperators.push('@'); 
                counterListOfOperators++;
                buttonAnimation(".root");
                break;

        case '%':
            if (returnOperators.includes(listOfOperators[listOfOperators.length-1]) ===true) {
            number=operator(number2,reserveNumber);
            }
            else if (listOfOperators[listOfOperators.length-1]===null) {
                number=0;
            } else {
                var percentage=number2*(number/100);
                reserveNumber=percentage
                number=operator(number2,percentage);
            }
            document.querySelector("input").value=number;
            number2=number; 
            number=0; 
            listOfOperators.push('number');
            counterListOfOperators++;
            listOfOperators.push('%'); 
            counterListOfOperators++;
            buttonAnimation(".percent");
            break;

        case 'N':
            case 'n':
                case '+/-':
                number=-number; 
                document.querySelector("input").value=number;
                buttonAnimation(".precent");
                break;

        case '.':
            boolDecimalPoint=true;
            document.querySelector("input").value=number;
            buttonAnimation(".decimal");
            break;
    
        case 'Enter':
        case '=':
                if (listOfOperators[listOfOperators.length-1] ==='=') {
                    number=operator(number2,reserveNumber)
                } 
                else {
                    reserveNumber=number;
                    number=operator(number2,number);
                } 
                document.querySelector("input").value=number;
                listOfOperators.push('number');
                counterListOfOperators++;
                number2=number; 
                number=0; 
                listOfOperators.push('='); 
                counterListOfOperators++;
                console.log(listOfOperators);
                buttonAnimation(".equal");
                break;
        
        case '+':
            if (operator != null) {
                    reserveNumber=number 
                    number=operator(number2,number)
            } 
            else {
                reserveNumber=number 
            }
            document.querySelector("input").value=number;
            listOfOperators.push('number');
            counterListOfOperators++;
            number2=number; 
            number=0; 
            operator=addition;
            listOfOperators.push('+'); 
            counterListOfOperators++;
            console.log(listOfOperators);
            buttonAnimation(".addition");
            break;
            
        case '-':
            if (operator != null) {
                    reserveNumber=number;
                    number=operator(number2,number)
            } 
            else {
                reserveNumber=number 
            }
            document.querySelector("input").value=number;
            listOfOperators.push('number');
            counterListOfOperators++;
            number2=number; 
            number=0; 
            operator=subtraction;
            listOfOperators.push('-'); 
            counterListOfOperators++;
            console.log(listOfOperators);
            buttonAnimation(".subtract");
            break;

        case '*':
        case '×':
            if (operator != null) {
                    reserveNumber=number;
                    number=operator(number2,number);
            } 
            else {
                reserveNumber=number 
            }
            document.querySelector("input").value=number;
            listOfOperators.push('number');
            counterListOfOperators++;
            number2=number; 
            number=0; 
            operator=multiplication;
            listOfOperators.push('*'); 
            counterListOfOperators++;
            console.log(listOfOperators);
            buttonAnimation(".multiply");
            break;

        case '/':
            case '÷':
                if (operator != null) {
                        reserveNumber=number;
                        number=operator(number2,number);
                } 
                else {
                    reserveNumber=number 
                }
                document.querySelector("input").value=number;
                listOfOperators.push('number');
                counterListOfOperators++; 
                number2=number; 
                number=0; 
                operator=division;
                listOfOperators.push('/'); 
                counterListOfOperators++;
                console.log(listOfOperators);
            buttonAnimation(".divide");
            break;

        case '0':
            anotherSequence();
            if (boolDecimalPoint) {
                decimalPoint*=10;
                number=number+0/decimalPoint;
            } else {
                number=number*10;
            }
            document.querySelector("input").value=number;
            buttonAnimation(".num0");
            break;
        

        case '1':
            anotherSequence();
            if (boolDecimalPoint) {
                decimalPoint*=10;
                number=number+1/decimalPoint;
            } else {
                number=number*10+1;
            }
            document.querySelector("input").value=number;
            buttonAnimation(".num1");
            break;

        case '2':
            anotherSequence();
            if (boolDecimalPoint) {
                decimalPoint*=10;
                number=number+2/decimalPoint;
            } else {
                number=number*10+2;
            }
            document.querySelector("input").value=number;
            buttonAnimation(".num2");
            break;

        case '3':
            anotherSequence();
            if (boolDecimalPoint) {
                decimalPoint*=10;
                number=number+3/decimalPoint;
            } else {
                number=number*10+3;
            }
            document.querySelector("input").value=number;
            buttonAnimation(".num3");
            break;  

        case '4':
            anotherSequence();
            if (boolDecimalPoint) {
                decimalPoint*=10;
                number=number+4/decimalPoint;
            } else {
                number=number*10+4;
            }
            document.querySelector("input").value=number;
            buttonAnimation(".num4");
            break;

        case '5':
            anotherSequence();
            if (boolDecimalPoint) {
                decimalPoint*=10;
                number=number+5/decimalPoint;
            } else {
                number=number*10+5;
            }
            document.querySelector("input").value=number;
            buttonAnimation(".num5");
            break;
        
        case '6':
            anotherSequence();
            if (boolDecimalPoint) {
                decimalPoint*=10;
                number=number+6/decimalPoint;
            } else {
                number=number*10+6;
            }
            document.querySelector("input").value=number;
            buttonAnimation(".num6");
            break;

        case '7': 
            anotherSequence();
            if (boolDecimalPoint) {
                decimalPoint*=10;
                number=number+7/decimalPoint;
            } 
            else {
                number=number*10+7;
            }
                document.querySelector("input").value=number;
                buttonAnimation(".num7");
            break;

        case '8': 
            anotherSequence();
            if (boolDecimalPoint) {
                decimalPoint*=10;
                number=number+8/decimalPoint;
            } 
            else {
                number=number*10+8;
            }
                document.querySelector("input").value=number;
                buttonAnimation(".num8");
                break;

        case '9':
            anotherSequence();
            if (boolDecimalPoint) {
                decimalPoint*=10;
                number=number+9/decimalPoint;
            } 
            else {
                number=number*10+9;
            }
            document.querySelector("input").value=number;
            buttonAnimation(".num9");
            break;

        default: console.log(key)
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector(currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {activeButton.classList.remove("pressed");},100);
}

function addition(x,y) {
    return x+y
}

function subtraction(x,y) {
    return x-y
}

function multiplication(x,y) {
    return x*y
}

function division(x,y) {
    if (y!=0) {
        return x/y 
    }
    else  {
        document.querySelector("input").value='ZeroDivisionError';
    }
}

function equal(x,y) {
    return y
}

function anotherSequence() { 
    if (returnOperators.includes(listOfOperators[listOfOperators.length-1]) ===true) {
        number=0;
        number2=null;
        reserveNumber=null;
        solution=null; 
        operator=null;
        decimalPoint=1;
        boolDecimalPoint=false; 
        listOfOperators=[null];
        counterListOfOperators=1;
    }
}
