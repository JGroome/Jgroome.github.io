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