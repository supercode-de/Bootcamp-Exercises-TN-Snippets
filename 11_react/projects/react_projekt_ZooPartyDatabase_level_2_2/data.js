const animals = [
    {
        name: "Lion",
        species: "Panthera leo",
        habitat: "Grasslands",
        lifespan: 12,
        diet: "Carnivore",
        funFacts: [
            "Lions are the only cats that live in groups.",
            "A group of lions is called a pride.",
            "Male lions usually sleep 20 hours a day.",
        ],
        emoji: "🦁",
    },
    {
        name: "Panda",
        species: "Ailuropoda melanoleuca",
        habitat: "Bamboo Forests",
        lifespan: 20,
        diet: "Herbivore",
        funFacts: [
            "Pandas spend most of their day eating bamboo.",
            "They have a special thumb for gripping bamboo.",
            "Pandas are excellent climbers.",
        ],
        emoji: "🐼",
    },
    {
        name: "Elephant",
        species: "Loxodonta",
        habitat: "Savannah",
        lifespan: 60,
        diet: "Herbivore",
        funFacts: [
            "Elephants can recognize themselves in a mirror.",
            "They have the largest brains of any land animal.",
            "Elephants use their trunks for breathing, smelling, and grabbing objects.",
        ],
        emoji: "🐘",
    },
    {
        name: "Dolphin",
        species: "Delphinidae",
        habitat: "Oceans",
        lifespan: 25,
        diet: "Carnivore",
        funFacts: [
            "Dolphins use a unique whistle to identify themselves.",
            "They are known for their playful behavior and high intelligence.",
            "Dolphins sleep with one eye open.",
        ],
        emoji: "🐬",
    },
    {
        name: "Tiger",
        species: "Panthera tigris",
        habitat: "Jungles",
        lifespan: 15,
        diet: "Carnivore",
        funFacts: [
            "Tigers are excellent swimmers and enjoy being in the water.",
            "They have striped skin, not just striped fur.",
            "A group of tigers is called a streak or ambush.",
        ],
        emoji: "🐅",
    },
    {
        name: "Giraffe",
        species: "Giraffa camelopardalis",
        habitat: "Savannah",
        lifespan: 25,
        diet: "Herbivore",
        funFacts: [
            "Giraffes have the same number of neck vertebrae as humans (7).",
            "A giraffe's tongue can be up to 45 cm long.",
            "They only need 5 to 30 minutes of sleep in a 24-hour period.",
        ],
        emoji: "🦒",
    },
    {
        name: "Kangaroo",
        species: "Macropus",
        habitat: "Australia",
        lifespan: 6,
        diet: "Herbivore",
        funFacts: [
            "Kangaroos are excellent jumpers and can cover large distances.",
            "Female kangaroos have three vaginas.",
            "They use their tails for balance and support while hopping.",
        ],
        emoji: "🦘",
    },
    {
        name: "Cheetah",
        species: "Acinonyx jubatus",
        habitat: "Savannah",
        lifespan: 12,
        diet: "Carnivore",
        funFacts: [
            "Cheetahs are the fastest land animals, reaching speeds up to 75 mph.",
            "They cannot roar like other big cats.",
            'Cheetahs have distinctive "tear stripes" on their faces.',
        ],
        emoji: "🐆",
    },
    {
        name: "Orangutan",
        species: "Pongo",
        habitat: "Rainforests",
        lifespan: 40,
        diet: "Herbivore",
        funFacts: [
            "Orangutans are one of the closest relatives to humans.",
            "They are excellent tool users, using sticks to extract insects.",
            "Female orangutans are known to fashion umbrellas out of large leaves during rain.",
        ],
        emoji: "🦧",
    },
    {
        name: "Whale Shark",
        species: "Rhincodon typus",
        habitat: "Oceans",
        lifespan: 70,
        diet: "Plankton",
        funFacts: [
            "Whale sharks are the largest fish in the world.",
            "Despite their size, they are filter feeders, mainly eating plankton.",
            "They have a lifespan of up to 70 years.",
        ],
        emoji: "🦈",
    },
    {
        name: "Red Fox",
        species: "Vulpes vulpes",
        habitat: "Forests",
        lifespan: 14,
        diet: "Omnivore",
        funFacts: [
            "Red foxes are adaptable and can be found in a variety of habitats.",
            "They are known for their cunning and intelligence.",
            "Foxes have a wide range of vocalizations, including screams, barks, and howls.",
        ],
        emoji: "🦊",
    },
    {
        name: "Penguin",
        species: "Spheniscidae",
        habitat: "Antarctica",
        lifespan: 20,
        diet: "Fish",
        funFacts: [
            "Penguins are excellent swimmers but are flightless birds.",
            "They mate for life and often engage in elaborate courtship rituals.",
            "The Emperor Penguin is the tallest and heaviest species of penguin.",
        ],
        emoji: "🐧",
    },
    {
        name: "Hippopotamus",
        species: "Hippopotamus amphibius",
        habitat: "Rivers",
        lifespan: 40,
        diet: "Herbivore",
        funFacts: [
            "Hippos are responsible for more human deaths in Africa than other large animals.",
            "They are excellent swimmers and can hold their breath for up to 5 minutes.",
            "Despite their appearance, hippos can run surprisingly fast on land.",
        ],
        emoji: "🦛",
    },
    {
        name: "Red Panda",
        species: "Ailurus fulgens",
        habitat: "Himalayan Forests",
        lifespan: 10,
        diet: "Herbivore",
        funFacts: [
            "Red pandas are not closely related to giant pandas.",
            "They are skilled climbers and spend a significant amount of time in trees.",
            "Red pandas have a false thumb, which is an extension of the wrist bone.",
        ],
        emoji: "🐾",
    },
    {
        name: "Jaguar",
        species: "Panthera onca",
        habitat: "Rainforests",
        lifespan: 20,
        diet: "Carnivore",
        funFacts: [
            "Jaguars are powerful swimmers and often hunt in water.",
            "They have a distinctive golden-yellow coat covered in spots.",
            "Jaguars are known for their strong jaws and powerful bite.",
        ],
        emoji: "🐆",
    },
    {
        name: "Sloth",
        species: "Bradypodidae",
        habitat: "Rainforests",
        lifespan: 20,
        diet: "Herbivore",
        funFacts: [
            "Sloths are one of the slowest mammals, moving at a speed of about 0.03 miles per hour.",
            "They spend most of their lives hanging upside down in trees.",
            "Sloths have a specialized stomach to digest tough leaves.",
        ],
        emoji: "🦥",
    },
    {
        name: "Polar Bear",
        species: "Ursus maritimus",
        habitat: "Arctic",
        lifespan: 25,
        diet: "Carnivore",
        funFacts: [
            "Polar bears are the largest land carnivores and are excellent swimmers.",
            "They have a thick layer of blubber to insulate them from the cold.",
            "Polar bears rely on sea ice to hunt seals, their main prey.",
        ],
        emoji: "🐾",
    },
    {
        name: "Chameleon",
        species: "Chamaeleonidae",
        habitat: "Various",
        lifespan: 5,
        diet: "Insectivore",
        funFacts: [
            "Chameleons can change color to blend in with their surroundings.",
            "Their eyes can move independently, allowing them to see in two directions simultaneously.",
            "Chameleons have a long, sticky tongue for catching insects.",
        ],
        emoji: "🦎",
    },
    {
        name: "Koala",
        species: "Phascolarctos cinereus",
        habitat: "Eucalyptus Forests",
        lifespan: 15,
        diet: "Herbivore",
        funFacts: [
            "Koalas are marsupials and carry their underdeveloped young in a pouch.",
            "They primarily eat eucalyptus leaves and are known for their sleepy demeanor.",
            "Koalas have a unique digestive system adapted to detoxify eucalyptus toxins.",
        ],
        emoji: "🐨",
    },
    {
        name: "Gorilla",
        species: "Gorilla",
        habitat: "Rainforests",
        lifespan: 35,
        diet: "Herbivore",
        funFacts: [
            "Gorillas are the largest primates and share about 98% of their DNA with humans.",
            "They live in social groups called troops, led by a dominant silverback.",
            "Gorillas use a variety of vocalizations and facial expressions to communicate.",
        ],
        emoji: "🦍",
    },
    {
        name: "Ostrich",
        species: "Struthio camelus",
        habitat: "Savannah",
        lifespan: 40,
        diet: "Omnivore",
        funFacts: [
            "Ostriches are the largest and heaviest living birds.",
            "They are flightless but are exceptional runners, reaching speeds up to 45 miles per hour.",
            "Ostriches have powerful legs with two toes on each foot.",
        ],
        emoji: "🐦",
    },
    {
        name: "Armadillo",
        species: "Dasypodidae",
        habitat: "Grasslands",
        lifespan: 15,
        diet: "Insectivore",
        funFacts: [
            "Armadillos are known for their armor-like shell composed of bony plates.",
            "They are skilled diggers and can quickly burrow into the ground for protection.",
            "Armadillos are primarily nocturnal animals.",
        ],
        emoji: "🏹",
    },
    {
        name: "Elephant Seal",
        species: "Mirounga",
        habitat: "Antarctica",
        lifespan: 20,
        diet: "Carnivore",
        funFacts: [
            "Elephant seals are the largest seals and can weigh up to 8,800 pounds.",
            "Males have a large, inflatable proboscis resembling an elephant trunk.",
            "They are excellent deep-sea divers, capable of reaching depths of over 5,000 feet.",
        ],
        emoji: "🐘",
    },
    {
        name: "Peacock",
        species: "Pavo",
        habitat: "Woodlands",
        lifespan: 20,
        diet: "Omnivore",
        funFacts: [
            "Peacocks are known for their extravagant and colorful plumage.",
            "Only the males, known as peafowls, have the vibrant iridescent feathers.",
            "Peacocks use their impressive displays to attract mates.",
        ],
        emoji: "🦚",
    },
    {
        name: "Snow Leopard",
        species: "Panthera uncia",
        habitat: "Mountainous Regions of Central Asia",
        lifespan: 22,
        diet: "Carnivore",
        funFacts: [
            "Snow leopards have thick fur and a long tail for balance in their rocky habitat.",
            "They are solitary and elusive, making them challenging to study in the wild.",
            "Snow leopards are adapted to high altitudes, living in elevations up to 18,000 feet.",
        ],
        emoji: "🐆",
    },
    {
        name: "Fennec Fox",
        species: "Vulpes zerda",
        habitat: "Deserts",
        lifespan: 14,
        diet: "Omnivore",
        funFacts: [
            "Fennec foxes have large ears that help dissipate heat in their desert habitat.",
            "They are the smallest species of foxes.",
            "Fennec foxes are nocturnal and are skilled hunters of insects and small mammals.",
        ],
        emoji: "🦊",
    },
    {
        name: "Platypus",
        species: "Ornithorhynchus anatinus",
        habitat: "Australia",
        lifespan: 15,
        diet: "Carnivore",
        funFacts: [
            "Platypuses are unique mammals that lay eggs instead of giving birth to live young.",
            "Males have venomous spurs on their hind legs.",
            "Platypuses are excellent swimmers and can close their eyes, ears, and nostrils while underwater.",
        ],
        emoji: "🦆",
    },
    {
        name: "Toucan",
        species: "Ramphastidae",
        habitat: "Rainforests",
        lifespan: 20,
        diet: "Frugivore",
        funFacts: [
            "Toucans have long, colorful bills that are larger than their bodies.",
            "They are excellent fliers and can travel long distances.",
            "Toucans are social birds and often travel in flocks.",
        ],
        emoji: "🦜",
    },
    {
        name: "Pangolin",
        species: "Pholidota",
        habitat: "Tropical Regions",
        lifespan: 20,
        diet: "Insectivore",
        funFacts: [
            "Pangolins are covered in tough, overlapping scales made of keratin.",
            "They are the only mammals with this type of protective armor.",
            'Pangolins are often referred to as "scaly anteaters."',
        ],
        emoji: "🦛",
    },
    {
        name: "Gazelle",
        species: "Antilopinae",
        habitat: "Grasslands",
        lifespan: 12,
        diet: "Herbivore",
        funFacts: [
            "Gazelles are known for their incredible speed and agility.",
            "They have a keen sense of hearing and eyes positioned to detect predators.",
            "Gazelles are social animals and often form large herds for protection.",
        ],
        emoji: "🦌",
    },
    {
        name: "Kookaburra",
        species: "Dacelo",
        habitat: "Woodlands",
        lifespan: 15,
        diet: "Carnivore",
        funFacts: [
            "Kookaburras are known for their distinctive laughing call.",
            "They are skilled hunters and feed on a variety of prey, including snakes and insects.",
            "Kookaburras are part of the kingfisher family.",
        ],
        emoji: "🦉",
    },
    {
        name: "Axolotl",
        species: "Ambystoma mexicanum",
        habitat: "Lakes of Mexico",
        lifespan: 15,
        diet: "Carnivore",
        funFacts: [
            "Axolotls are a type of salamander that remains aquatic throughout their entire life.",
            "They have remarkable regenerative abilities, capable of regrowing entire body parts.",
            "Axolotls come in various colors, including albino and golden.",
        ],
        emoji: "🐉",
    },
    {
        name: "Okapi",
        species: "Okapia johnstoni",
        habitat: "Congo Rainforest",
        lifespan: 30,
        diet: "Herbivore",
        funFacts: [
            "Okapis are closely related to giraffes and share a similar body structure.",
            "They are known for their long, flexible tongues, which they use to grasp leaves.",
            "Okapis are elusive and were not known to the Western world until the early 20th century.",
        ],
        emoji: "🦓",
    },
    {
        name: "Cobra",
        species: "Elapidae",
        habitat: "Various",
        lifespan: 20,
        diet: "Carnivore",
        funFacts: [
            "Cobras are venomous snakes known for their hooded appearance when threatened.",
            "They can spit venom at their prey or predators as a defense mechanism.",
            "Cobras are revered in some cultures and are often associated with mythology.",
        ],
        emoji: "🐍",
    },
    {
        name: "Lynx",
        species: "Lynx",
        habitat: "Forests",
        lifespan: 15,
        diet: "Carnivore",
        funFacts: [
            "Lynxes have tufted ears and short tails, giving them a distinctive appearance.",
            "They are solitary animals and have a keen sense of sight and hearing.",
            "Lynxes are known for their stealthy hunting abilities.",
        ],
        emoji: "😺",
    },
    {
        name: "Lemur",
        species: "Lemuridae",
        habitat: "Madagascar",
        lifespan: 25,
        diet: "Herbivore",
        funFacts: [
            "Lemurs are endemic to Madagascar and are known for their unique vocalizations.",
            "They have a keen sense of smell and communicate through scent marking.",
            "Lemurs are social animals and live in groups called troops.",
        ],
        emoji: "🐒",
    },
    {
        name: "Red-eyed Tree Frog",
        species: "Agalychnis callidryas",
        habitat: "Rainforests",
        lifespan: 5,
        diet: "Insectivore",
        funFacts: [
            "Red-eyed tree frogs have vibrant red eyes, which are used as a defensive mechanism.",
            "They are excellent climbers and spend much of their time in trees.",
            "These frogs change color based on their surroundings and stress levels.",
        ],
        emoji: "🐸",
    },
    {
        name: "Arctic Fox",
        species: "Vulpes lagopus",
        habitat: "Arctic Tundra",
        lifespan: 14,
        diet: "Omnivore",
        funFacts: [
            "Arctic foxes have thick fur that changes color with the seasons.",
            "They are well-adapted to cold climates and can withstand frigid temperatures.",
            "Arctic foxes are known for their intelligence and resourcefulness.",
        ],
        emoji: "🦊",
    },
    {
        name: "Quokka",
        species: "Setonix brachyurus",
        habitat: "Australia",
        lifespan: 10,
        diet: "Herbivore",
        funFacts: [
            "Quokkas are known for their friendly and smiling appearance.",
            "They are herbivorous and primarily eat grasses and leaves.",
            "Quokkas are social animals and often gather in groups.",
        ],
        emoji: "🦘",
    },
    {
        name: "Puffin",
        species: "Fratercula",
        habitat: "Coastal Cliffs",
        lifespan: 20,
        diet: "Piscivore",
        funFacts: [
            "Puffins are skilled fliers and excellent swimmers.",
            "They have brightly colored beaks, especially during the breeding season.",
            "Puffins often form large colonies for breeding and nesting.",
        ],
        emoji: "🐧",
    },
    {
        name: "Siberian Tiger",
        species: "Panthera tigris altaica",
        habitat: "Siberian Taiga",
        lifespan: 20,
        diet: "Carnivore",
        funFacts: [
            "Siberian tigers are the largest cats in the world.",
            "They have a thick fur coat to withstand cold temperatures in their habitat.",
            "Siberian tigers are endangered, with conservation efforts in place to protect them.",
        ],
        emoji: "🐅",
    },
    {
        name: "Komodo Dragon",
        species: "Varanus komodoensis",
        habitat: "Indonesian Islands",
        lifespan: 30,
        diet: "Carnivore",
        funFacts: [
            "Komodo dragons are the largest lizards on Earth.",
            "They are skilled hunters and have a venomous bite.",
            "Komodo dragons can eat prey larger than themselves, thanks to their flexible jaws.",
        ],
        emoji: "🐉",
    },
    {
        name: "Koala",
        species: "Phascolarctos cinereus",
        habitat: "Eucalyptus Forests",
        lifespan: 15,
        diet: "Herbivore",
        funFacts: [
            "Koalas are marsupials and carry their underdeveloped young in a pouch.",
            "They primarily eat eucalyptus leaves and are known for their sleepy demeanor.",
            "Koalas have a unique digestive system adapted to detoxify eucalyptus toxins.",
        ],
        emoji: "🐨",
    },
    {
        name: "Hedgehog",
        species: "Erinaceidae",
        habitat: "Various",
        lifespan: 5,
        diet: "Insectivore",
        funFacts: [
            "Hedgehogs are covered in spines that serve as a protective armor.",
            "They are nocturnal and have a good sense of smell and hearing.",
            "Hedgehogs are excellent swimmers and climbers.",
        ],
        emoji: "🦔",
    },
    {
        name: "Pangolin",
        species: "Pholidota",
        habitat: "Tropical Regions",
        lifespan: 20,
        diet: "Insectivore",
        funFacts: [
            "Pangolins are covered in tough, overlapping scales made of keratin.",
            "They are the only mammals with this type of protective armor.",
            'Pangolins are often referred to as "scaly anteaters."',
        ],
        emoji: "🦛",
    },
];

export default animals;
