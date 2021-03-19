function vypocetBMI(){
	var vaha = document.bmiCalc.vaha.value
	var vyska = document.bmiCalc.vyska.value

	if(vaha > 0 && vyska > 0){
		var finalBmi = (vaha/(vyska*vyska));
		document.bmiCalc.bmi.value = new Number(finalBmi).toFixed(2)

		if(finalBmi < 18.5){
			document.bmiCalc.vysledek.value = "Podváha"
		}

		if(finalBmi > 18.5 && finalBmi < 25){
			document.bmiCalc.vysledek.value = "Normalní váha"
		}

		if(finalBmi > 25 && finalBmi < 30){
			document.bmiCalc.vysledek.value = "Nadváha"
		}

		if(finalBmi > 30 && finalBmi < 35){
			document.bmiCalc.vysledek.value = "Obezita"
		}

		if(finalBmi > 35){
			document.bmiCalc.vysledek.value = "Velká Obezita"
		}

	}else{
		alert ("Prosím vyplň všechna políčka.")
	}
}