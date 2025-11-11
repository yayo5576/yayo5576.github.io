function init(){
//add your javascrip between these two lines of code
   document.getElementById("entrybutton").addEventListener("click", myAlert); 

   function myAlert(){
     var inputV = document.getElementById('entryinput'); 
     var valueInput = inputV.value; 
     alert ("Yael Martinez: " + valueInput);
     document.getElementById('textoutput').innerText = `${valueInput}`;
  }
  
}
window.addEventListener('load', init);

