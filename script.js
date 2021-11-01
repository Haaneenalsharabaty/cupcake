$(document).ready(show_cupcakes);

let cup_cakes=[
    {"name":"Chocolate","calories":"high","weight":"200gm"},
    {"name":"Carrot","calories":"medium","weight":"150gm"},
    {"name":"Banana","calories":"high","weight":"200gm"},
    {"name":"Strawberry","calories":"low","weight":"160gm"},
    {"name":"Peanut","calories":"medium","weight":"200gm"}
];




function show_cupcakes()
{
    let table = document.getElementById("cupcake-table");

    for (let i = 0; i < cup_cakes.length; i++) {let tr = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");
    td1.innerHTML = cup_cakes[i].calories;
    td1.style.color = "red";
    td2.innerHTML = cup_cakes[i].name;
    td3.innerHTML = cup_cakes[i].weight;

    tr.append(td2);
    tr.appendChild(td1);
    tr.appendChild(td3);
    table.append(tr);

    td1.style.color = "white";
    if (cup_cakes[i].calories == "high") {
      td1.style.backgroundColor = "red";
    } else if (cup_cakes[i].calories == "medium") {
      td1.style.backgroundColor = "orange";
    } else {
      td1.style.backgroundColor = "green";
    }
  }
    //write code that shows the cupcakes in the table as per the instructions
}




let Submit = document.getElementById("submit")
let form=document.getElementById("form")
let name1 = document.getElementById("CustomerName");

let msg1 = document.getElementById("name");
let count = document.getElementById("Count");
let msg2 = document.getElementById("num");
let type = document.getElementById("Type");
let msg3 = document.getElementById("kind");
let dTime = document.getElementById("Delivery Time");
let msg4 = document.getElementById("time");
let allergies = document.getElementById("Allergies");
let msg5=document.getElementById("aller")

form.addEventListener("submit", function validate(e) {
    e.preventDefault()
 
    if (name1.value.length<6 || name1.value.lenght>16) {
        msg1.innerText = "the Name must be between 5 and 16 e characters long";
        name1.style.border = " 1px solid red";
        msg1.color = "red";
      
    }
    else {
        msg1.innerText = "okay";
        msg1.style.color ="green";
        name1.style.border = " 1px solid green";
        localStorage.setItem("CustomerName", JSON.stringify(name1.value));
    }

    if (count.value < 1 || count.value > 15) {
        msg2.innerText = "the count must be at least 1 and at most 15";
        count.style.border = "1px solid red";
        msg2.style.color = "red";
        
    } else {
        msg2.innerText = "okay";
        msg2.style.color = "green";
        count.style.border = " 1px solid green";
        
    }
    if (type.value == "None") {
        msg3.innerText = "you must choose a type";
        type.style.borderColor = "red";

        
    } else {
        msg3.innerText = "okay";
        msg3.style.color = "green";
        type.style.borderColor = "green";
        
    }
    if (dTime.value == "None") {
        msg4.innerText = "you must choose a Time";
        dTime.style.borderColor = "red";
        
    } else {
        msg4.innerText = "okay";
        msg4.style.color = "green";
        dTime.style.border = " 1px solid green";
        
    }


    if (type.value == "Chocolate" && allergies.value == "Dairy Free") {
        msg5.innerText = "this cake is not dairy free";
        msg5.style.color = "red";
        allergies.style.borderColor = "red";
        
    }

    if (dTime.value == " 4:00 PM" && type.value == "Chocolate") {
        msg4.innerText = "unfortunately chocolate cupcakes cannot be delivered at 4:00 pm";
        msg4.style.color="red"
        dTime.style.border = "1px solid red";
        
    }
    if (type.value == "Pecan" && allergies.value == "Nut Free") {
        msg5.innerText = "this cake is not nut free";
        msg5.style.color = "red";
        allergies.style.border = " 1px solid red";
        
    }
    
        
    

        
    });   





    
 let wel = document.getElementById("welcome")
    let Cname = $("#CustomerName").val();

function show_storage(){
    //write code that shows the name from local storage
   
    Cname = JSON.parse(localStorage.getItem("CustomerName"));

wel.innerText = "welcome  " + Cname;}