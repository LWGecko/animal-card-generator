const flipSound = new Audio("flip.mp3");
let lastAnimalName = null;

const animals = [
    {
        name: "Lion",
        image: "images/lion.jpeg",
        habitat: "African Savanna",
        diet: "Carnivore",
        trait: "Roar can be heard 5 miles away",
        rarity: "Legendary"
    },
    {
        name: "Tiger",
        image: "images/tiger.jpeg",
        habitat: "Asian Forests",
        diet: "Carnivore",
        trait: "No two stripe patterns are the same",
        rarity: "Rare"
    },
    {
        name: "Grizzly Bear",
        image: "images/grizzlybear.jpeg",
        habitat: "North American forests",
        diet: "Omnivore",
        trait: "Running up to 35 mph",
        rarity: "Rare"
    },
    {
        name: "Seagull",
        image: "images/seagull.jpeg",
        habitat: "Coastal areas",
        diet: "Omnivore",
        trait: "Long-term memory to recognize human faces",
        rarity: "Common"
    },
    {
        name: "Sea Turtle",
        image: "images/seaturtle.jpeg",
        habitat: "Oceans",
        diet: "Omnivore",
        trait: "Have extremely long finger bones",
        rarity: "Rare"
    },
    {
        name: "Red Panda",
        image: "images/redpanda.jpeg",
        habitat: "Mountain forests",
        diet: "Herbivore",
        trait: "Uses its tail as a blanket",
        rarity: "Common"
    },
    {
        name: "Snow Leopard",
        image: "images/snowleopard.jpeg",
        habitat: "Mountains",
        diet: "Carnivore",
        trait: "Can jump up to 50 feet",
        rarity: "Legendary"
    },
    {
        name: "Axolotl",
        image: "images/axolotl.jpeg",
        habitat: "Freshwater lakes",
        diet: "Carnivore",
        trait: "Can regrow limbs",
        rarity: "Common"
    },
    {
        name: "Komodo Dragon",
        image: "images/komododragon.jpeg",
        habitat: "Islands",
        diet: "Carnivore",
        trait: "Has venomous bite",
        rarity: "Rare"
    },
    {
        name: "Golden Eagle",
        image: "images/goldeneagle.jpeg",
        habitat: "Mountains",
        diet: "Carnivore",
        trait: "Can see prey from miles away",
        rarity: "Legendary"
    },
    {
        name: "Elephant",
        image: "images/elephant.jpeg",
        habitat: "Africa & Asia",
        diet: "Herbivore",
        trait: "Incredible memory",
        rarity: "Rare"
    },
    {
        name: "Penguin",
        image: "images/penguin.jpeg",
        habitat: "Antarctica",
        diet: "Fish",
        trait: "Can swim but cannot fly",
        rarity: "Common"
    },
    {
        name: "Giraffe",
        image: "images/giraffe.jpeg",
        habitat: "African Savanna",
        diet: "Herbivore",
        trait: "Tallest land animal",
        rarity: "Common"
    },
    {
        name: "Panda",
        image: "images/panda.jpeg",
        habitat: "China",
        diet: "Bamboo",
        trait: "Eats for 12 hours a day",
        rarity: "Rare"
    },
    {
        name: "Dolphin",
        image: "images/dolphin.jpeg",
        habitat: "Oceans Worldwide",
        diet: "Fish",
        trait: "Highly intelligent",
        rarity: "Rare"
    },
    {
        name: "Kangaroo",
        image: "images/kangaroo.jpeg",
        habitat: "Australia",
        diet: "Grass",
        trait: "Carries babies in pouch",
        rarity: "Common"
    },
    {
        name: "Owl",
        image: "images/owl.jpeg",
        habitat: "Forests",
        diet: "Small animals",
        trait: "Can rotate head 270°",
        rarity: "Common"
    },
    {
        name: "Polar Bear",
        image: "images/polarbear.jpeg",
        habitat: "Arctic",
        diet: "Carnivore",
        trait: "Excellent swimmer",
        rarity: "Rare"
    },
    {
        name: "Wolf",
        image: "images/wolf.jpeg",
        habitat: "Northern Hemisphere",
        diet: "Carnivore",
        trait: "Hunts in packs",
        rarity: "Common"
    },
    {
        name: "Zebra",
        image: "images/zebra.jpeg",
        habitat: "Africa",
        diet: "Herbivore",
        trait: "Unique stripe pattern",
        rarity: "Legendary"
    },
    {
        name: "Koala",
        image: "images/koala.jpeg",
        habitat: "Australia",
        diet: "Eucalyptus leaves",
        trait: "Sleeps 20 hours a day",
        rarity: "Rare"
    },
    {
    name: "Hoatzin",
    image: "images/hoatzin.jpeg",
    habitat: "Amazon Rainforest",
    diet: "Herbivore",
    trait: "Being the stinkiest bird in the world",
    rarity: "Rare"
    },
    {
    name: "Shoebill",
    image: "images/shoebill.jpeg",
    habitat: "East African swamps",
    diet: "Carnivore",
    trait: "Massive shoe-shaped bill",
    rarity: "Legendary"
    },
    {
    name: "Honeybee",
    image: "images/honeybee.jpeg",
    habitat: "Worldwide",
    diet: "Herbivore",
    trait: "Communicates through dance",
    rarity: "Common"
    },
    {
        name: "Cheetah",
        image: "images/cheetah.jpeg",
        habitat: "Africa",
        diet: "Carnivore",
        trait: "Fastest land animal",
        rarity: "Legendary"
    },
    {
        name: "Red Fox",
        image: "images/fox.jpeg",
        habitat: "Northern Hemisphere",
        diet: "Omnivore",
        trait: "Extremely adaptable",
        rarity: "Common"
    }
];

const button = document.getElementById("generateBtn");
const card = document.getElementById("card");

const nameEl = document.getElementById("animalName");
const rarityEl = document.getElementById("rarity");
const imageEl = document.getElementById("animalImage");
const habitatEl = document.getElementById("habitat");
const dietEl = document.getElementById("diet");
const traitEl = document.getElementById("trait");

let lastAnimal = null;
let isCooldown = false;

button.addEventListener("click", () => {

    flipSound.currentTime = 0;
    flipSound.play();

    if (isCooldown) return;

    isCooldown = true;
    button.disabled = true;

    // Prevent repeat
    let availableAnimals = animals.filter(a => a !== lastAnimal);

    let random = Math.random();
    let selectedGroup;

    if (random < 0.6) {
    selectedGroup = availableAnimals.filter(a => a.rarity === "Common");
    }
    else if (random < 0.9) {
    selectedGroup = availableAnimals.filter(a => a.rarity === "Rare");
    }
    else {
    selectedGroup = availableAnimals.filter(a => a.rarity === "Legendary");
    }

    // Fallback safety
    if (selectedGroup.length === 0) {
        selectedGroup = availableAnimals;
    }

    const animal = selectedGroup[Math.floor(Math.random() * selectedGroup.length)];
    lastAnimal = animal;

    // Update card
    nameEl.textContent = animal.name;
    rarityEl.textContent = "Rarity: " + animal.rarity;
    imageEl.src = animal.image;
    habitatEl.textContent = animal.habitat;
    dietEl.textContent = animal.diet;
    traitEl.textContent = animal.trait;

    card.classList.remove("common", "rare", "legendary");

    if (animal.rarity === "Common") {
    card.classList.add("common");
    }
    else if (animal.rarity === "Rare") {
    card.classList.add("rare");
    }
    else if (animal.rarity === "Legendary") {
    card.classList.add("legendary");
    }

    card.classList.remove("hidden");

    // Cooldown 1.5 seconds
    setTimeout(() => {
        isCooldown = false;
        button.disabled = false;
    }, 1500);

});