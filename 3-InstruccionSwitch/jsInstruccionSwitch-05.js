function mostrar()
{
	//tomo la hora
	let horaDelDia;

	horaDelDia = document.getElementById("txtIdHora").value;
	horaDelDia = parseInt(horaDelDia);
	
	switch (horaDelDia ) {
		case 7:
		case 8:
		case 9:
		case 10 :
		case 11:
		alert("Es de mañana");
			break;
	
		default :
			break;
	}
	
	



}//FIN DE LA FUNCIÓN