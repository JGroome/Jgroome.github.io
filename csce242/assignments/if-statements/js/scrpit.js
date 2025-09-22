
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