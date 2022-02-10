import db from "./db.js";

let executed = false;
export default function seed() {
  if (!executed) {
    const products = [
      {
        name: "Meia Rita Lee - Bruxaria",
        artist: "Rita Lee",
        type: "cloth",
        amount: 39.9,
        image:
          "https://universalmusic.vteximg.com.br/arquivos/ids/167954-1000-1000/meia-rita-lee-bruxaria-meia-rita-lee-bruxaria-00602445318278-26060244531827.jpg?v=637737983701200000",
        size: [],
      },
      {
        name: "Camiseta Rita Lee - Bruxa",
        artist: "Rita Lee",
        type: "cloth",
        amount: 69.9,
        image:
          "https://universalmusic.vteximg.com.br/arquivos/ids/164385-1000-1000/camiseta-rita-lee-bruxa-amarela-camiseta-rita-lee-bruxa-amarela-00602435791647-26060243579164.jpg?v=637473715820900000",
        size: [],
      },
      {
        name: "CD Rita Lee - Build Up (1970)",
        artist: "Rita Lee",
        type: "album",
        amount: 32.9,
        image:
          "https://universalmusic.vteximg.com.br/arquivos/ids/166690-1000-1000/cd-rita-lee-build-up-1970-cd-rita-lee-build-up-1970-00042283025325-2604228302532.jpg?v=637649901495830000",
        size: [],
      },
      {
        name: "Caneca Rita Lee - Flor - Branca",
        artist: "Rita Lee",
        type: "acessory",
        amount: 39.9,
        image:
          "https://universalmusic.vteximg.com.br/arquivos/ids/168099-1000-1000/caneca-rita-lee-flor-branca-caneca-rita-lee-flor-00602445095773-26060244509577.jpg?v=637741608073230000",
        size: [],
      },
      {
        name: "Meia Rita Lee - Flores",
        artist: "Rita Lee",
        type: "cloth",
        amount: 39.9,
        image:
          "https://universalmusic.vteximg.com.br/arquivos/ids/167950-1000-1000/meia-rita-lee-flores-meia-rita-lee-flores-00602445318162-26060244531816.jpg?v=637737983337230000",
        size: [],
      },
      {
        name: "Red (Taylor's Version) 2CD",
        artist: "Taylor Swift",
        type: "album",
        amount: 64.9,
        image:
          "https://universalmusic.vteximg.com.br/arquivos/ids/166602-1000-1000/Red-Taylor-Swift-CD-1.png?v=637638730520400000",
        size: [],
      },
      {
        name: "CD Fealerss (Taylor's Version)",
        artist: "Taylor Swift",
        type: "album",
        amount: 54.9,
        image:
          "https://universalmusic.vteximg.com.br/arquivos/ids/166659-1000-1000/Taylor-Swift-fearless-cd.png?v=637642054322770000",
        size: [],
      },
      {
        name: "D Taylor Swift - Reputation Volume 1 - Importado",
        artist: "Taylor Swift",
        type: "acessory",
        amount: 299.9,
        image:
          "https://universalmusic.vteximg.com.br/arquivos/ids/166672-550-550/Taylor-Swift-reputation1.png?v=637642243116700000",
        size: [],
      },
      {
        name: "Camiseta Taylor Swift - The 'You Drew Stars Around My Scars' T-Shirt",
        artist: "Taylor Swift",
        type: "cloth",
        amount: 64.9,
        image:
          "https://universalmusic.vteximg.com.br/arquivos/ids/166649-1000-1000/Taylor-Swift-if-i-knew.png?v=637642049523000000",
        size: ["P", "M"],
      },
      {
        name: "CD Taylor Swift - 1. The 'In the trees' Edition Deluxe Cd",
        artist: "Taylor Swift",
        type: "album",
        amount: 44.9,
        image:
          "https://universalmusic.vteximg.com.br/arquivos/ids/166657-1000-1000/Taylor-Swift-folklore-cd-front.png?v=637642053231230000",
        size: [],
      },
      {
        name: "CD Freddie Mercury - Mr Bad Guy",
        artist: "Freddie Mercury",
        type: "album",
        amount: 9.9,
        image: "",
        size: [],
      },
      {
        name: "CD ABBA - Voyage (Versão Standard)",
        artist: "ABBA",
        type: "album",
        amount: 39.9,
        image:
          "https://universalmusic.vteximg.com.br/arquivos/ids/166760-1000-1000/Abba-Voyage-CD-Standard.png?v=637662084390830000",
        size: [],
      },
      {
        name: "Vinil Abba - Waterloo - Importado",
        artist: "ABBA",
        type: "album",
        amount: 39.9,
        image:
          "https://universalmusic.vteximg.com.br/arquivos/ids/163978-1000-1000/vinil-abba-waterloo-importado-vinil-abba-waterloo-importado-00602527346489-00060252734648.jpg?v=637455448575770000",
        size: [],
      },
      {
        name: "CD ABBA - Voyage (Versão DELUXE)",
        artist: "ABBA",
        type: "album",
        amount: 154.9,
        image:
          "https://universalmusic.vteximg.com.br/arquivos/ids/166761-1000-1000/Abba-Voyage-CD-Deluxe.png?v=637662084755500000",
        size: [],
      },
      {
        name: "CD Ariana Grande - Yours Truly",
        artist: "Ariana Grande",
        type: "album",
        amount: 37.9,
        image:
          "https://universalmusic.vteximg.com.br/arquivos/ids/163037-1000-1000/cd-ariana-grande-yours-truly-cd-ariana-grande-yours-truly-00602537480821-2660253748082.jpg?v=637341261830900000",
        size: [],
      },
      {
        name: "VINIL Duplo Ariana Grande - Dangerous Woman - Importado",
        artist: "Ariana Grande",
        type: "album",
        amount: 329.9,
        image:
          "https://universalmusic.vteximg.com.br/arquivos/ids/163621-1000-1000/vinil-duplo-ariana-grande-dangerous-woman-importado-vinil-duplo-ariana-grande-dangerous-wo-00602547868541-00060254786854.jpg?v=637395989066300000",
        size: [],
      },
    ];

    const artists = [
      {
        name: "Rita Lee",
      },
      {
        name: "Taylor Swift",
      },
      {
        name: "Ariana Grande",
      },
      {
        name: "ABBA",
      },
      {
        name: "Freddie Mercury",
      },
    ];

    db.collection("products").deleteMany({});
    db.collection("products").insertMany(products);
    db.collection("artists").deleteMany({});
    db.collection("artists").insertMany(artists);
    executed = true;
  }
}
