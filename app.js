var mapa 
   
function initMap(){
  if (mapa != null)
  mapa.document.getElementById("mapa");
  mapa = new google.maps.Map(document.getElementById("mapa"),{
      center: { lat: -34.8877, lng: -56.1649}, zoom: 19
  }
  
  )
};

