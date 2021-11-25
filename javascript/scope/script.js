/*Variables and scopes */
//var training, concept;//declaration 
console.log(training);
console.log(concept);
console.log(newConcept);
 var training ='DBS Angular';//Assign data to the variable
 var concept ='scopes';

 //let is block scoped 
 //let will not allow hositing
 let newConcept="check";

 if(concept=='scopes'){
     var checkAgain ="I am var type";
     let checkAgain1 ="I am let type";
 }
console.log(checkAgain);
console.log(checkAgain1);