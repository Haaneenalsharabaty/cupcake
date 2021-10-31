$(document).ready(show_cupcakes);

var cup_cakes=[
    {"name":"Chocolate","calories":"high","weight":"200gm"},
    {"name":"Carrot","calories":"medium","weight":"150gm"},
    {"name":"Banana","calories":"high","weight":"200gm"},
    {"name":"Strawberry","calories":"low","weight":"160gm"},
    {"name":"Peanut","calories":"medium","weight":"200gm"}
];
var tBody = document.getElementById("cupcake-table");
var tr = document.createElement("tr");
var td1 = document.createElement("td");
var td2 = document.createElement("td");
var td3 = document.createElement("td");



function show_cupcakes(){for (let i = 0; i < cup_cakes.length; i++) {
    td1.innerHTML = cup_cakes[i].calories;
    td1.style.color = "red";
    td2.innerHTML = cup_cakes[i].name;
    td3.innerHTML = cup_cakes[i].weight;

    tr.append(td2);
    tr.appendChild(td1);
    tr.appendChild(td3);
    tBody.append(tr);

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




var Submit=document.getElementById("submit")
var name1 = document.getElementById("CustomerName");

var msg1 = document.getElementById("name");
var count = document.getElementById("Count");
var msg2 = document.getElementById("num");
var type = document.getElementById("Type");
var msg3 = document.getElementById("kind");
var dTime = document.getElementById("Delivery Time");
var msg4 = document.getElementById("time");
var allergies = document.getElementById("Allergies");
var msg5=document.getElementById("aller")

Submit.addEventListener("click",   function validate(){


    

    
    if (name1.value.length<6 || name1.value.lenght>16) {
        msg1.innerText = "the Name must be between 5 and 16 e characters long";
        name1.style.border = "red";
        msg1.color = "red";
        
    }
    else {
        msg1.innerText = "okay";
        msg1.color = "green";
        name1.style.borderColor = "green";
        localStorage.setItem("CustomerName", JSON.stringify(name1));
    }
    if (count.value < 1 || count.value > 15) {
        msg2.innerText = "the count must be at least 1 and at most 15";
        count.style.border = "red";
        msg2.color = "red";
        
    } else {
        msg2.innerText = "okay";
        msg2.color = "green";
        count.style.borderColor = "green";
        
    }
    if (type.value == "None") {
        msg3.innerText = "you must choose a type";
        type.style.borderColor = "red";

        
    } else {
        msg3.innerText = "okay";
        msg3.color = "green";
        type.style.borderColor = "green";
        
    }
    if (dTime.value == "None") {
        msg4.innerText = "you must choose a Time";
        dTime.style.borderColor = "red";
        
    } else {
        msg4.innerText = "okay";
        msg4.color = "green";
        dTime.style.borderColor = "green";
        
    }
    if (type.value == " Chocolate" && allergies.value == " Dairy Free") {
        msg5.innerText = "this cake is not dairy free";
        allergies.style.borderColor = "red";
        
    } else if (type.value == " Pecan" && allergies.value == "  Nut Free") {
        msg5.innerText = "this cake is not nut free";
        allergies.style.borderColor = "red";


        
    }
    if (dTime.value == " 4:00 PM" && type.value == " Chocolate") {
        msg4.innerText = "unfortunately chocolate cupcakes cannot be delivered at 4:00 pm";

        dTime.style.borderColor = "red";
        
    } 
        
    

        
    });   





    


function show_storage(){
    //write code that shows the name from local storage
    let wel = document.getElementById("welcome")
    let Cname = $("#CustomerName").val();
    Cname = JSON.parse(localStorage.getItem("CustomerName"));
}
wel.innerText = "welcome" + Cname;