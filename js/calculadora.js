
function calcularPropina(){

	var total = document.getElementById("total").value;
	var porcentaje = document.getElementById("porcentaje").value;
	var cantidad = document.getElementById("cantidad").value;
	var propina;
	var pagar;

	propina = (total*(porcentaje/100));
	document.getElementById("propina").value = propina;
	pagar = propina/cantidad;
	document.getElementById("pagar").value = pagar;
}