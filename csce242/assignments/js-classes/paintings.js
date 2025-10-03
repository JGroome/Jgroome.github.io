class Painting {
  constructor({ id, title, artist, img, framed = false }) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.img = img;
    this.framed = framed;
  }

  /** Returns a section containing title and image  */
  getSection() {
    return `
      <article class="card" data-id="${this.id}">
        <div class="card-body">
          <h3>${this.title}</h3>
          <button class="reset open-modal" aria-label="Open ${this.title}">
            <div class="img-wrap">
              <img src="${this.img}" alt="${this.title} by ${this.artist}" loading="lazy"/>
            </div>
          </button>
        </div>
      </article>
    `;
  }
}


const PAINTINGS = [
  new Painting({
    id: "bee",
    title: "The Bee",
    artist: "Eriek Bagus",
    img: "images/bee.jpg",
    framed: true
  }),
  new Painting({
    id: "kitten",
    title: "Dream love kitten",
    artist: "MEA Studios",
    img: "images/kitten.jpg",
    framed: false
  }),
  new Painting({
    id: "flowers",
    title: "Flowers and Butterflies",
    artist: "Clip-art library",
    img: "images/flowers.jpg",
    framed: false
  }),
  new Painting({
    id: "forest",
    title: "Forest Animals",
    artist: "Valery Rybakow",
    img: "images/forest.jpg",
    framed: true
  }),
  new Painting({
    id: "yellow-blooms",
    title: "Yellow Blooms",
    artist: "Ken Powers",
    img: "images/yellow-blooms.jpg",
    framed: false
  })
];

window.Painting = Painting;
window.PAINTINGS = PAINTINGS;
