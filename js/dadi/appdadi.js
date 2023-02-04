console.log('play')

const play = document.getElementById('play')
const result = document.getElementById ('result')
let risultatoUtente = document.getElementById ('dadoUtente')
let risultatoPc = document.getElementById ('dadoPc')

play.addEventListener ('click', function () {
	let dadoUtente = Math.round(Math.random()*5+1);
	let dadoPc = Math.round(Math.random()*5+1);
    console.log(dadoUtente,dadoPc)
    risultatoUtente.innerHTML = 'Hai lanciato il numero ' + dadoUtente
    risultatoPc.innerHTML = 'il Pc ha lanciato il numero ' + dadoPc
			
	if(dadoUtente > dadoPc){

        result.innerHTML = 'hai vinto';
    }
	else {
	    result.innerHTML = 'hai perso';
    }
} )


