var data = sessionStorage.getItem('user'); 
$("#user").html("<h1 style='font-size: 15px;margin-top: 19px; margin-left:4px;' >"+data+"</h1>");
$("#todo").load("home.html");

function p(){
    $("#todo").load("home.html");
}
function g(){
    $("#todo").load("persons.html");
}
function h(){
    $("#todo").load("operations.html");
}
function i(){
    $("#todo").load("examples.html");
}

