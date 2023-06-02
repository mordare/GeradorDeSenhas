	document.getElementById("formulario").addEventListener("submit", (event) => {
		event.preventDefault();

		var numeroTam = document.getElementById("numeroTam").value;
		if(numeroTam.trim() == "") {
			alert("Digite um numero!");
		} else {
			if(isNaN(numeroTam)) {
				alert("Digite um numero valido!");
			} else if (parseInt(numeroTam) > 300) {
				alert("Sua senha é muito grande, minimo de caracteres são de 300 caracteres!");
			}else {
				var resultado = "";
				var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#@$";
				var charsTam = chars.length;
				var contador = 0;
				while(contador < numeroTam) {
					resultado += chars.charAt(Math.floor(Math.random() * charsTam));
					contador += 1;
				}
				var elemento = document.createElement("p");
				var corpo = document.getElementById("corpo");
				corpo.appendChild(elemento);
				elemento.setAttribute("id", "res");
				document.getElementById("res").innerHTML = "<p>SENHA GERADA: <strong>" + resultado + "</strong></p>";
			}
		}
	});