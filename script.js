let v1;
let v2;
let v3;

const constVariable1 = 10;
const constVariable2 = "hello";
 displayCoordinates = document.getElementById("display-coordinates");


 deviceLongitude = null;
 deviceLatitude = null;
 myLocation = () => {
  console.log("myLocation function called");
  console.log("Longitud: " + deviceLongitude);
  console.log("Latitud: " + deviceLatitude);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);

  } else {
    displayCoordinates.innerHTML = "Tu ubicación está bloqueada. Por favor habilite el permiso de ubicación.";
  }
};
 showPosition = (coordinates) => {
  console.log("showPosition function called");
  deviceLongitude = coordinates.coords.longitude;
  deviceLatitude = coordinates.coords.latitude;
  console.log("Longitud: " + deviceLongitude);
  console.log("Latitud: " + deviceLatitude);

  displayCoordinates.innerHTML = " " + deviceLongitude + "<br/>   " + deviceLatitude;
};
