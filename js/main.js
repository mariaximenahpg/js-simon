// Descrizione:
// Visualizzare in pagina 5 numeri casuali da 1 a 100 senza duplicati.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma

const fiveRandom = []
    
while (fiveRandom.length < 5) {
    let i
    i = Math.floor(Math.random() * 100) + 1
    if (!fiveRandom.includes(i)) {
        fiveRandom.push(i)
    }
}
alert(fiveRandom)
console.log(fiveRandom)


setTimeout(function(){
    game()
}, 30000)

const chances = []
const correctChoice = []

function game() {
    let chance
    while (isNaN(chance) || chances.length < 5) {
        chance = Number(prompt("Inserisci uno dei numeri che hai memorizzato"))
        chances.push(chance)
        if (fiveRandom.includes(chance)){
            if(correctChoice.includes(chance)){
                alert("Il numero è già presente. Non sprecare invano i tentativi a tua disposizione :(");
            } else{
                correctChoice.push(chance)
            }
        }
    }

console.log(chances)
console.log(correctChoice)
    if (chances.length === 5) {
        alert(`Hai indovinato ${correctChoice.length} numeri: ${correctChoice}`)
    }
}