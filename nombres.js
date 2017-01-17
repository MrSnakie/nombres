/* ----------------------------- */
/*           JAVASCRIPT          */
/* ----------------------------- */

function GenererNombre() {

	var numCase;
	var seuil = parseInt(prompt("Combien voulez-vous afficher de nombres ?"));

	if (seuil<=300) {
		for (numCase=1; numCase<=seuil; numCase++) {
			document.getElementById('liste').innerHTML += '<li>'+numCase+'</li>';
		}
	}

	else {
		alert("Erreur !");
		location.reload();
	}
}