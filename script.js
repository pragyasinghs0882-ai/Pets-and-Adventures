const pets = [
  { name: "Rex", breed: "German Shepherd", type: "Dog", coins: "200" , img_src: 'germanshepherd.jpeg' }, 
  { name: "Bubbles", type: "Fish", coins: "500", img_src: 'fishnemo.jpeg' },
  { name: "Milo", type: "Cat", coins: "400", img_src: 'catluna.jpeg' },
  { name: "Otis", type: "Otter", coins: "300", img_src: 'otter.jpeg'},
  { name: "Nibbles", type: "Hamster", coins: "250", img_src: 'hamster.jpeg'},
  { name: "Snowy", type: "Rabbit", coins: "234", img_src: 'rabbit.jpeg' }
];

const container = document.getElementById("card");

for (let i = 0; i < pets.length; i++) {
  const card = document.createElement("div");
  card.className = "card";
const img =
document.createElement('img');
img.className = "pet-image";
img.src = pets[i].img_src;

  if (pets[i].breed) {
    card.innerHTML =
      pets[i].name + "<br>" +
      pets[i].type + "<br>" +
      pets[i].breed 
  } else {
    card.innerHTML =
      pets[i].name + "<br>" +
      pets[i].type;
  }

  const button = document.createElement("button");
  button.className = "button";
  button.textContent = "Learnmore";
card.prepend(img);
  card.appendChild(button);
  container.appendChild(card);
}
