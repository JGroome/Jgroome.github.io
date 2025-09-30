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

function drawSkyObject(night){
  if(night){
    document.body.classList.add('night');
    const moon = document.createElement('div');
    moon.className = 'moon';
    scene.appendChild(moon);
  }else{
    const sun = document.createElement('div');
    sun.className = 'sun';
    scene.appendChild(sun);
  }
}

function drawClouds(){
  const topY = 80;
  const spacing = (scene.clientWidth - 400) / 5;
  for(let i=0;i<6;i++){
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.style.left = `${40 + i*spacing}px`;
    cloud.style.top  = `${topY + (i%2===0 ? 0 : 15)}px`;

    // Build cloud parts
    const main = document.createElement('div');
    main.className = 'cloud-main';
    const center = document.createElement('div');
    center.className = 'cloud-center';
    const left = document.createElement('div');
    left.className = 'cloud-left';

    cloud.appendChild(main);
    cloud.appendChild(center);
    cloud.appendChild(left);

    scene.appendChild(cloud);
  }
}

function drawTrees(){
  const baseY = scene.clientHeight - 170;
  const spacing = (scene.clientWidth - 300) / 5;
  for(let i=0;i<6;i++){
    const t = document.createElement('div');
    t.className = 'tree';
    t.style.left = `${100 + i*spacing}px`;
    t.style.top  = `${baseY}px`;

    const crown = document.createElement('div');
    crown.className = 'crown';
    const trunk = document.createElement('div');
    trunk.className = 'trunk';

    t.appendChild(crown);
    t.appendChild(trunk);
    scene.appendChild(t);
  }
}

function addSignature(){
  const s = document.createElement('div');
  s.className = 'sig';
  s.textContent = 'josephgroome';
  scene.appendChild(s);
}

function drawScene(){
  clearScene();
  const night = isNightNow();
  drawSkyObject(night);
  drawClouds();
  drawTrees();
  addSignature();
}

drawBtn.addEventListener('click', drawScene);
