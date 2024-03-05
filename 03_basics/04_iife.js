// Immediately Invoked function expressions

(function chai(){
    // names iife
    console.log('DB connected');
})();


((name)=>{
    
    console.log(`Db Coonected two ${name}`);
})("Pranjal")