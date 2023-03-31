let saluto = "ciao";
let title = document.createElement("h1");
    title.classList.add("big-title");   
let titleText = document.createTextNode("Counter");
let container = document.getElementById("container");
let plusBtn = document.createElement("button");
    plusBtn.classList.add("button")

let minusBtn = document.createElement("button");
    minusBtn.classList.add("button")   

let minusBtnText = document.createTextNode("-");
let plusBtnText = document.createTextNode("+");
let display = document.createElement("div");
    display.classList.add("display");

// let displayText = document.createTextNode(0);
// let displayText = document.createElement("h2")
let value = 0;
    display.textContent = value
let displayContainer = document.createElement("div");
    displayContainer.classList.add("display-container")

let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container"); 

let checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("checkbox-container")
    
let negativeCheck = document.createElement("input");
    negativeCheck.type = "checkbox";
    negativeCheck.id = "negative"
    negativeCheck.classList.add("checkbox")
let negativeLabel = document.createElement("label")
    negativeLabel.htmlFor = "negative"
    negativeLabel.classList.add("label")
let negativeText = document.createTextNode("NEGATIVE NUMBERS")

// let x1Check = document.createElement("input");
//     x1Check.type = "radio";
//     x1Check.id = "x1";
//     x1Check.name ="x-mode";
//     x1Check.classList.add("checkbox");
// let x1Label = document.createElement("label");
//     x1Label.htmlFor = "x1";
//     x1Label.classList.add("label");
// let x1Text = document.createTextNode("X1")

// let x2Check = document.createElement("input")
//     x2Check.type = "radio";
//     x2Check.id = "x2"
//     x2Check.name = "x-mode"
//     x2Check.classList.add("checkbox")
// let x2Label = document.createElement("label")
//     x2Label.htmlFor = "x2"
//     x2Label.classList.add("label")
// let x2Text =document.createTextNode("X2")

// let x10Check = document.createElement("input");
//     x10Check.type = "radio";
//     x10Check.id = "x10"
//     x10Check.name = "x-mode"
//     x10Check.classList.add("checkbox")
// let x10Label = document.createElement("label")
//     x10Label.htmlFor = "x10"
//     x10Label.classList.add("label")
// let  x10Text = document.createTextNode("X10")

let select = document.createElement("select");
let optX1 = document.createElement("option")
    optX1.value = "x1";
let optX1Text = document.createTextNode("X1")

let optX2 = document.createElement("option");
    optX2.value = "x2";
let optX2Text = document.createTextNode("X2")

let optX10 = document.createElement("option")
    optX10.value = "x10";
let optX10Text = document.createTextNode("X10")

let divCheckLeft = document.createElement("div")
    divCheckLeft.classList.add("div-check")
let divCheckRight = document.createElement("div")
    divCheckRight.classList.add("div-check")
    divCheckRight.classList.add("div-check-hidden")
let divCheckRightP = document.createElement("p")
let divCheckRightText = document.createTextNode("MOLTIPLICATORE")
let divCheckMessageMobile = document.createElement("div");
let messageMobile = document.createTextNode("Se tieni premuto i pulsanti, i numeri crescono o diminuiscono di 10 ogni secondo")



let resetBtn = document.createElement("button");
    resetBtn.id = "reset-btn"

let resetText = document.createTextNode("RESET");


//TITLE

title.appendChild(titleText);
container.appendChild(title);

// DISPLAY
    // displayText.classList.add("number-display")
    // display.appendChild(displayText)
    displayContainer.appendChild(display)
    container.appendChild(displayContainer);
//RESET
    resetBtn.appendChild(resetText);
    container.appendChild(resetBtn);
    container.appendChild(buttonContainer);
//BUTTONS
    minusBtn.appendChild(minusBtnText);
    buttonContainer.appendChild(minusBtn);
    plusBtn.appendChild(plusBtnText);
    buttonContainer.appendChild(plusBtn);
//CHECKBOX
    negativeLabel.appendChild(negativeText);
    divCheckLeft.appendChild(negativeLabel)
    divCheckLeft.appendChild(negativeCheck);
    checkboxContainer.appendChild(divCheckLeft)

    select.classList.add("select")
    optX1.classList.add("option")
    optX2.classList.add("option")
    optX10.classList.add("option")

    optX1.appendChild(optX1Text)
    select.appendChild(optX1)

    optX2.appendChild(optX2Text)
    select.appendChild(optX2)

    optX10.appendChild(optX10Text)
    select.appendChild(optX10)

    divCheckRightP.appendChild(divCheckRightText)
    divCheckRightP.classList.add("label")
    divCheckRight.appendChild(divCheckRightP)
    divCheckRight.appendChild(select)
    checkboxContainer.appendChild(divCheckRight)

    divCheckMessageMobile.classList.add("message")
    divCheckMessageMobile.appendChild(messageMobile);
    checkboxContainer.appendChild(divCheckMessageMobile);

    container.appendChild(checkboxContainer)

//FUNZIONI

    function add(){
        if(optX1.selected == true){
            value++;
            display.innerHTML = value;
        } else if(optX2.selected == true){
            value += 2;
            display.innerHTML = value;
        } else if(optX10.selected == true){
            value += 10;
            display.innerHTML = value;
        }
    };

    function remove(){
        if(negativeCheck.checked == false){
            if(optX1.selected == true & value>0){
            value--;
            display.innerHTML = value;
        } else if(optX2.selected == true & value > 1){
            value -= 2;
            display.innerHTML = value;
        } else if(optX10.selected == true & value > 9){
            value -= 10;
            display.innerHTML = value;
        } else {alert("non posso contare in negativo")}
        } else{
            if(optX1.selected == true){
                value--;
                display.innerHTML = value;
            } else if(optX2.selected == true){
                value -= 2;
                display.innerHTML = value;
            } else if(optX10.selected == true){
                value -= 10;
                display.innerHTML = value;
            }}
        }
    
    function reset(){
        value = 0;
        display.innerHTML = value;
    }
        
    
plusBtn.addEventListener("click", add);
minusBtn.addEventListener("click", remove);
resetBtn.addEventListener("click", reset);

addEventListener("resize", ()=>{
    reset();
    optX1.selected = true;
})

console.log(negativeCheck)













