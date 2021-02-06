const contacts = {
  name: "SoPack",
  address: "Address: Rue blabla, 1234 Paris - France",
  phone: "0348-593094",
  email: "sopack@gmail.com",
};
const packagingComponentsInfo = [
  {
    id: 0,
    service: "Consulting",
    description:
      "We offer professional consultations and manage the development of one of several components of perfumery of cosmetic.",
    images: [
      { id: 0, name: "Item 1", description: "", src: "/images/0.png" },
      { id: 1, name: "Item 2", description: "", src: "/images/1.png" },
    ],
  },
  {
    id: 1,
    service: "Bottle",
    description:
      "According to client's need and its market, we can customize our European standard bottles or develop a specific mold for your project.",
    images: [
      { id: 2, name: "Item 3", description: "", src: "/images/2.png" },
      { id: 3, name: "Item 4", description: "", src: "/images/3.png" },
    ],
  },
  {
    id: 2,
    service: "Caps",
    description:
      "According to client's need and its market, we can customize our European standard bottles or develop a specific mold for your project.",
    images: [
      { id: 4, name: "Item 5", description: "", src: "/images/4.png" },
      { id: 0, name: "Item 6", description: "", src: "/images/0.png" },
    ],
  },
  {
    id: 3,
    service: "Packaging",
    description:
      "According to client's need and its market, we can customize our European standard bottles or develop a specific mold for your project.",
    images: [
      { id: 2, name: "Item 7", description: "", src: "/images/2.png" },
      { id: 1, name: "Item 8", description: "", src: "/images/1.png" },
    ],
  },
];

const processInfo = [
  {
    id: 0,
    title: "Branding",
    description:
      "We manage the development of several components of perfumery and cosmetic.",
  },
  {
    id: 1,
    title: "Design",
    description:
      "Thanks to our design experience and creativity our creations are unique and captivating. We can provide you with a complete design study, adapted too your needs and expectations. From the bottle to the secondary packaging.",
  },
  {
    id: 2,
    title: "Fragrance",
    description:
      "Thanks to our design experience and creativity our creations are unique and captivating. We can provide you with a complete design study, adapted too your needs and expectations. From the bottle to the secondary packaging.",
  },
  {
    id: 3,
    title: "Development & filling",
    description:
      "Thanks to our design experience and creativity our creations are unique and captivating. We can provide you with a complete design study, adapted too your needs and expectations. From the bottle to the secondary packaging.",
  },
  {
    id: 4,
    title: "Legal formalities",
    description:
      "Thanks to our design experience and creativity our creations are unique and captivating. We can provide you with a complete design study, adapted too your needs and expectations. From the bottle to the secondary packaging.",
  },
  {
    id: 5,
    title: "Manufacturing Companies",
    description:
      "We manage the development of several components of perfumery and cosmetic.",
  },
];

const products = [
  { id: 0, name: "Je Suis", description: "Je Suis", src: "/images/products/jesuis.jpg" },
  { id: 1, name: "Kohinu Diamond for her", description: "Kohinu Diamond for her", src: "/images/products/kohinudiamondforher.jpg" },
  { id: 2, name: "Kohinu Diamond for him", description: "Kohinu Diamond for him", src: "/images/products/kohinudiamondforhim.jpg" },
  { id: 3, name: "Odecla Night e Le Music", description: "Odecla Night e Le Music", src: "/images/products/odeclanightelemusic.jpg" },
  { id: 4, name: "Ruby of Temur for her", description: "Ruby of Temur for her", src: "/images/products/rubyoftemurforher.jpg" },
  { id: 5, name: "Ruby of Temur for him", description: "Ruby of Temur for him", src: "/images/products/rubyoftemurforhim.jpg" },
  { id: 6, name: "Shine like diamonds", description: "Shine like diamonds", src: "/images/products/shinelikediamonds.jpg" },
  { id: 7, name: "Silver Oud", description: "Silver Oud", src: "/images/products/silveroud.jpg" },
  { id: 8, name: "The Woods Collection", description: "The woods collection", src: "/images/products/thewoodscollection.jpg" },
  { id: 9, name: "Vilavie Collection", description: "Vilavie collection", src: "/images/products/vilaviecollection.jpg" },
  { id: 10, name: "Vilavie Modern Rose", description: "Vilavie modern rose", src: "/images/products/vilaviemodernrose.jpg" },
  { id: 11, name: "Vilavie Precious Wood", description: "Vilavie precious wood", src: "/images/products/vilaviepreciouswood.jpg" },
  { id: 12, name: "Vilavie Royal Oud", description: "Vilavie Royal Oud", src: "/images/products/vilavieroyaloud.jpg" },

];

export { contacts, packagingComponentsInfo, processInfo, products };
