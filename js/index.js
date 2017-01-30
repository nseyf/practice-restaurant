const backgrounds = [
  "https://static.pexels.com/photos/9708/food-pizza-restaurant-eating.jpg",  "https://static.pexels.com/photos/4939/bread-food-plate-toast.jpg",
  "https://static.pexels.com/photos/5928/salad-healthy-diet-spinach.jpg",
  "https://static.pexels.com/photos/42326/noodles-pasta-spaghetti-farfalle-42326.jpeg"
];

setInterval(()=> {
  const setBackground = document.getElementById('main').style.background;
  
  const randomBackground = backgrounds[Math.floor(Math.random()*backgrounds.length)];
 
  randomBackground.onload = 
document.getElementById('main').style.background = "url(" + randomBackground + ") center no-repeat";
  document.getElementById('main').style.backgroundSize = "cover";
}, 1000);
  
 /* document.getElementById('main').style.background = "url(" + backgrounds[2] + ") center no-repeat";
  document.getElementById('main').style.backgroundSize = "cover";*/
backgroundShuffle();

function googleMap(){
  const where = {lat: 51.496715, lng: -0.176367}
  const location = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: where
  });
  const marker = new google.maps.Marker({
    position: where,
    map: location
  })

}