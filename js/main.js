const listaNumeri = document.getElementById ("numeri"); 
/* console.log("INIZIO") */

for (let i = 1; i <= 100; i++) {  


    let contenuto = i;//buzzfiz,buzz,fizz oppure il numero;
    
    /* se sono numeri multipli di 3 e di 5 allora scrivimi in console buzzfizz */
    if ((i % 3 ==0 ) && (i % 5 ==0 )){
        console.log("buzzfizz");
        contenuto = "buzzfizz";
    } 

    /* se sono numeri mulyipli di 3 allora scrivimi fizz */
     else if (i % 3 ==0 )  {
        console.log("fizz");
        contenuto = "fizz";
        
    }  
        /* se sono numeri multipli di 5 allora scrivimi buzz */
     else if (i % 5 ==0 ) {
        console.log("buzz");
        contenuto = "buzz";
        
    } else {
        console.log(i); 
    } 
    
    let newbox = document.createElement("div")
    newbox.classList.add("box");
    newbox.innerHTML = contenuto;
    listaNumeri.append(newbox);

    
    

}