//dichiaro array con tutti i cognomi
var listaCognomi = ["Stotani" , "Aslam" , "Alessio" , "Marini" , "pontillo" , "CapelliMerda"];


// chiedo all'utente il suo cognome in un prompt 
var cognomeUtente = (prompt("Inserisci il tuo cognome")).toLowerCase();

// pusho il cognome nell'Array lista cognomi 
listaCognomi.push(cognomeUtente);


if(isNaN(cognomeUtente)) {
    
    console.log("Il cognome inserito dall'utente è: " + cognomeUtente)

    // crea un ciclo che prende ogni cognome all'interno dell' Array 
    // e modifica to lower case e lo mette in una nuovo Array
    var listaCognomiToLowerCase = [];

    for (var j = 0; j < listaCognomi.length; j++) {

        listaCognomiToLowerCase.push(listaCognomi[j].toLowerCase());
    }

    // stampo nella console la lista aggiornata con cognomeUtente ordinata alfabeticamente 
    console.log("Ecco la lista di tutti i cognomi ordinata alfabeticamente: " + listaCognomiToLowerCase.sort()  );
    
    // ciclo finchè non trovo la posizione 
    var posizioneCognome;
    for(var i = 0; i < listaCognomiToLowerCase.length; i++) {
        if(cognomeUtente === listaCognomiToLowerCase[i]) {
            posizioneCognome = i+1;
        }
    }
    
    // stampo nella console la posizione di dove si trova il cognomeUtente
    console.log("Il tuo cognome si trova nella posizione numero " + posizioneCognome)
    
} else {
    
    alert("Inserisci il tuo cognome. Non un numero!")
}








