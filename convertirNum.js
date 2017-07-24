var num, chaine;

function convertir(n){
	var cent, dix, uni, nombre = "";
	uni = n%10;
	dix = ((n%100)-uni)/10;
	cent = (n-(dix*10 + uni))/100;

	if (cent != 0){
		switch(cent){
			case 1:
				nombre += "Cent ";
			break;
			case 2: 
				nombre += "Deux cent ";
			break;
			case 3: 
				nombre += "Trois cent ";
			break;
			case 4: 
				nombre += "Quatre cent ";
			break;
			case 5: 
				nombre += "Cinq cent ";
			break;
			case 6: 
				nombre += "Six cent ";
			break;
			case 7: 
				nombre += "Sept cent ";
			break;
			case 8: 
				nombre += "Huit cent ";
			break;
			case 9: 
				nombre += "Neuf cent ";
			break;
		}
	}

	if (dix != 0){
		switch(dix){
			case 1:
				if (uni > 6 || uni ==0){
					nombre += "dix "
				}
				else {
					switch(uni){
						case 1:
							nombre += "onze";
						break;
						case 2:
							nombre += "douze";
						break;
						case 3:
							nombre += "treize";
						break;
						case 4:
							nombre += "quatorze";
						break;
						case 5: 
							nombre += "quinze";
						break;
						case 6: 
							nombre += "seize";
						break;
					}
				}
			break;
			case 2: 
				nombre += "vingt ";
			break;
			case 3: 
				nombre += "trente ";
			break;
			case 4: 
				nombre += "quarante ";
			break;
			case 5: 
				nombre += "cinquante ";
			break;
			case 6: 
				nombre += "soixante ";
			break;
			case 7: 
				nombre += "soixante dix ";
			break;
			case 8: 
				nombre += "quantre vingt ";
			break;
			case 9: 
				nombre += "quatre vingt dix ";
			break;
			default:
		}
	}

	if (uni != 0 && !(dix == 1 && uni > 6 )){
		switch(uni){
			case 1:
				nombre += "un";
			break;
			case 2:
				nombre += "deux";
			break;
			case 3:
				nombre += "trois";
			break;
			case 4:
				nombre += "quatre";
			break;
			case 5:
				nombre += "cinq";
			break;
			case 6:
				nombre += "six";
			break;
			case 7:
				nombre += "sept";
			break;
			case 8: 
				nombre += "huit";
			break;
			case 9:
				nombre += "neuf";
			break;
		}
	}

	return nombre;
}

num = parseInt(prompt("Veuillez rentrer un nombre entre 0 et 999 svp"));

chaine = convertir(num);

alert(chaine);
