// Section Toggle
function showSection(section){
  document.getElementById('planting').classList.add('hidden');
  document.getElementById('clock').classList.add('hidden');
  document.getElementById(section).classList.remove('hidden');
}


// Plant Slider Logic
const range = document.getElementById('daysRange');
const plantMsg = document.getElementById('plantMsg');
const plantImg = document.getElementById('plantImg');

function updatePlantMsg(val){
  if(val <= 2){
    plantMsg.textContent = `It's been ${val} days since watering your plant. Your plant is healthy and happy!`;
    plantImg.src = "images/fullplant.png";
    plantImg.style.display = "block";
  } else if(val <= 5){
    plantMsg.textContent = `It's been ${val} days. Your plant looks thirsty.`;
    plantImg.src = "images/25Plant.jpg";
    plantImg.style.display = "block";
  } else if(val <= 9){
    plantMsg.textContent = `It's been ${val} days. Please water your plant soon.`;
    plantImg.src = "images/75Plant.jpg";
    plantImg.style.display = "block";
  } else {
    plantMsg.textContent = `It's been ${val} days! Your plant needs urgent watering.`;
    plantImg.src = "images/100plant.jpg";
    plantImg.style.display = "block";
  }
}
range.addEventListener('input', ()=> updatePlantMsg(range.value));
updatePlantMsg(range.value);


// Clock Logic
function updateClock(){
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  document.getElementById('time').textContent = `${hours}:${minutes} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock();

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
let menuOpen = false;

menuToggle.addEventListener('click', ()=>{
  menuOpen = !menuOpen;
  mobileMenu.style.display = menuOpen ? "flex" : "none";
  menuToggle.textContent = menuOpen ? "▲ Menu" : "▼ Menu";
});