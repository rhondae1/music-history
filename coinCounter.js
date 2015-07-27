
function coinCounter(dollarAmt) {
  
  var remainder;
  
  // Initialize a JavaScript object to hold the coins
  
    var numQuarter = Math.floor(dollarAmt * 100 / 25);
    console.log(numQuarter);
    
    remainder = (dollarAmt %1).toFixed(2)
/*    console.log(remainder);*/
    
    var numDime = Math.floor(remainder * 100 / 10);
    console.log(numDime);
    
    remainder = (remainder - numDime * .10).toFixed(2);
/*    console.log(remainder);*/
    
    var numNickle = Math.floor(remainder * 100 / 5);
    console.log(numNickle);
    
    remainder = (remainder - .05).toFixed(2);
/*    console.log(remainder);*/
   
    var numPennies =(remainder * 100);
    console.log(numPennies);
    
    
      
    var coinPurse = ("Number of Quarters - " + numQuarter + "<br>" + "Number of Dimes - " + numDime + "<br>" + "Numbers of Nickles - " + numNickle + "<br>" + "Number of Pennies - " +     numPennies);
  
    document.write(coinPurse);
  