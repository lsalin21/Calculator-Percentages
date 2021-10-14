var numbfield1 = document.getElementById("numbfield1");
var numbfield2 = document.getElementById("numbfield2");
var resultfield = document.getElementById("resultfield");
var form = document.getElementById("xiswhatpercentofy");

form.addEventListener("submit", function(event){

    if (!numbfield1.value || !numbfield2.value) {
        alert("please enter values un the fields.");
    }else{ 
        var x = parseFloat(numbfield1.value);
        var y = parseFloat(numbfield2.value);

        var result = x / y;
        var percent = result * 100;

        resultfield.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    }

});













