// ===== 1) SUNNY TIMES =====
  document.getElementById("p1").onclick = () => {
    const sunnyPanel = document.querySelector('section[aria-labelledby="p1"]');

    // create container if it doesn't exist
    let wrapper = document.getElementById("beatles-lines");
    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.id = "beatles-lines";
      sunnyPanel.appendChild(wrapper);
    }

    // add the lines
    wrapper.innerHTML = `
      <p style="padding-left:0px;">Here comes the sun</p>
      <p style="padding-left:20px;">Sun</p>
      <p style="padding-left:40px;">Sun</p>
      <p style="padding-left:60px;">Sun</p>
      <p style="padding-left:0px;">Here it comes</p>
    `;
  };


  // ===== 2) SELECT A COLOR =====
  document.getElementById("picker").oninput = () => {
    const picker = document.getElementById("picker");
    const swatch = document.getElementById("swatch");
    const colorSection = document.querySelector('section[aria-labelledby="p2"]');

    // show paragraph
    let colorOutput = document.getElementById("colorOutput");
    if (!colorOutput) {
      colorOutput = document.createElement("p");
      colorOutput.id = "colorOutput";
      colorSection.appendChild(colorOutput);
    }
    colorOutput.innerHTML = "You picked: " + picker.value;
    colorOutput.style.color = picker.value;
  };


  