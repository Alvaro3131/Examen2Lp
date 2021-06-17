
 function raiz(){
    var num = $("#numero").val();
    $("#rel").val(Math.sqrt(num));
}



$("#enviar").click(function() {
    var nombre = $("#nombre").val();
    var correo = $("#correo").val();
    var telefono = $("#telefono").val();
    $("#name").html(" <i class='far fa-circle' style='margin-top: 19px; font-size: 15px; margin-right: 5px; color:black; '></i> "+"<h1 style='font-size: 20px;margin-top: 13px;' >"+nombre+"</h1>");
    $("#corre").html(" <i class='far fa-circle' style='margin-top: 19px; font-size: 15px; margin-right: 5px; color:black;'></i> "+"<h1 style='font-size: 20px;margin-top: 13px;' >"+correo+"</h1>");
    $("#tel").html(" <i class='far fa-circle' style='margin-top: 19px; font-size: 15px; margin-right: 5px; color:black;'></i> "+"<h1 style='font-size: 20px;margin-top: 13px;' >"+telefono+"</h1>");
});
