// Before adoption
const beforePics = {
  "Barbie": "images/dogb1.jpg",
  "Max": "images/dogb2.jpg",
  "Bella": "images/dogb3.jpg",
  "Charlie": "images/dogb4.jpg"
};

// After adoption
const afterPics = {
  "Barbie": "images/dogf1.jpg",
  "Max": "images/dogf2.jpg",
  "Bella": "images/dogf3.jpg",
  "Charlie": "images/dogf4.jpg"
};

const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.getElementById("close");

// Loop to create gallery cards
for (let dog in beforePics) {
  let card = document.createElement("div");
  card.className = "card";

  let img = document.createElement("img");
  img.src = beforePics[dog];
  img.alt = dog;

  let caption = document.createElement("div");
  caption.textContent = `Please adopt ${dog}`;

  card.appendChild(img);
  card.appendChild(caption);
  gallery.appendChild(card);

  // On click, show popup with after picture
  card.addEventListener("click", () => {
    popupTitle.textContent = `${dog} after adoption`;
    popupImg.src = afterPics[dog];
    popup.classList.remove("hidden");
  });
}

// Close popup
closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});

