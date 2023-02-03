console.log('work')

let message = ''
let inputMail = ''
//creare un array che contiene lista di email
const mailList = ['mariapaduano@boolean.it','gianlucalomarco@boolean.it','giuseppefunicello@boolean.it','emanueleparatore@boolean.it']
console.log(mailList)
console.log(mailList.length)
//chiedere all'utente di inserire una mail
inputMail = prompt('Inserisci la tua mail')
let emailValue = inputMail;
console.log(emailValue)
//controlla che la mail sia presente nella lista
for (let i = 0; i < mailList.length; i++ ){
    let access = mailList[i]
    if (access === emailValue){
        message = 'mail presente' 
        break;       
    }

    else { message = 'mail non presente'}    
}

console.log(message)
document.getElementById('result').innerHTML = message

//stampa un messaggio di verifica