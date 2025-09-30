const scene = document.getElementById('scene');
const drawBtn = document.getElementById('drawBtn');

function clearScene(){
  while(scene.firstChild) scene.removeChild(scene.firstChild);
  document.body.classList.remove('night');
}

function isNightNow(){
  const h = new Date().getHours();
  return (h >= 18 || h < 6); 
}
