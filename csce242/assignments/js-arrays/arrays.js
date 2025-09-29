// Before adoption
const beforePics = {
  "Barbie": "https://lipsum.app/640x480/",
  "Max": "https://lipsum.app/640x480/",
  "Bella": "https://lipsum.app/640x480/",
  "Charlie": "https://lipsum.app/640x480/"
};

// After adoption
const afterPics = {
  "Barbie": "https://lipsum.app/640x480/",
  "Max": "https://lipsum.app/640x480/",
  "Bella": "https://lipsum.app/640x480/",
  "Charlie": "https://lipsum.app/640x480/"
};

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
}