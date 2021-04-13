var listaCognomi = ["Bianchi" , "Neri" , "Rossi" , "Verdi" , "Gialli"];
var cognomeUtente = prompt("Inserisci il tuo cognome");
listaCognomi.push(cognomeUtente)


if(isNaN(cognomeUtente)) {
    
    console.log("Il cognome inserito dall'utente è: " + cognomeUtente)

    // ordina alfabeticamente l'Array listaCognomi 
    var listaCognomiOrdinata = listaCognomi.sort();
    
    // stampo nella console la lista aggiornata con cognomeUtente ordinata alfabeticamente 
    console.log("Ecco la lista di tutti i cognomi ordinata alfabeticamente: " + listaCognomiOrdinata);
    
    var posizioneCognome;
    
    // ciclo finchè non trovo la posizione 
    for(var i = 0; i < listaCognomiOrdinata.length; i++) {
        if(cognomeUtente === listaCognomiOrdinata[i]) {
            posizioneCognome = i+1;
        }
    }
    
    // stampo nella console la posizione di dove si trova il cognomeUtente
    console.log("Il tuo cognome si trova nella posizione numero " + posizioneCognome)

} else {

    alert("Inserisci il tuo cognome. Non un numero!")
}



