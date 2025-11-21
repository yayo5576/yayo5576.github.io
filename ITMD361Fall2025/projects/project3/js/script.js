  function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(41.88319962494935, -87.62614638726025),
    zoom:13,
    //src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=myMap";


  };
//41.89214221651159, -87.60525328820285

  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  
const marker = new AdvancedMarkerElement({
    map: map,
    position: {lat: 41.892, lng: -87.605},
    title: "Navy Pier",
  });  

  } 
 
 
 function init(){
//add your javascrip between these two lines of code
   document.getElementById("button").addEventListener("click", myAlert); 

   function myAlert(){
     var inputV = document.getElementById('entryinput'); 
     alert ("If you have questions, contact me at:\n\ymartinez2@hawk.illinoistech.edu");
     document.getElementById('textoutput').innerText = `${valueInput}`;
  }
  
  
}
window.addEventListener('load', init);
