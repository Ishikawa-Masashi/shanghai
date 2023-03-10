export const MahjonggTileset = {
  standard: {
    tileTypes: ["bamboo", "man", "pin", "wind", "dragon", "flower", "season"],

    tiles: {
      bamboo: {
        icons: [
          "bamboo1.png",
          "bamboo2.png",
          "bamboo3.png",
          "bamboo4.png",
          "bamboo5.png",
          "bamboo6.png",
          "bamboo7.png",
          "bamboo8.png",
          "bamboo9.png",
        ],
        countInSet: 4,
        matchesWithAnother: false,
      },
      man: {
        icons: [
          "man1.png",
          "man2.png",
          "man3.png",
          "man4.png",
          "man5.png",
          "man6.png",
          "man7.png",
          "man8.png",
          "man9.png",
        ],
        countInSet: 4,
        matchesWithAnother: false,
      },
      pin: {
        icons: [
          "pin1.png",
          "pin2.png",
          "pin3.png",
          "pin4.png",
          "pin5.png",
          "pin6.png",
          "pin7.png",
          "pin8.png",
          "pin9.png",
        ],
        countInSet: 4,
        matchesWithAnother: false,
      },
      wind: {
        icons: [
          "wind-east.png",
          "wind-north.png",
          "wind-south.png",
          "wind-west.png",
        ],
        countInSet: 4,
        matchesWithAnother: false,
      },
      dragon: {
        icons: ["dragon-chun.png", "dragon-green.png", "dragon-haku.png"],
        countInSet: 4,
        matchesWithAnother: false,
      },
      flower: {
        icons: [
          "flower-bamboo.png",
          "flower-chrysanthemum.png",
          "flower-orchid.png",
          "flower-plum.png",
        ],
        countInSet: 1,
        matchesWithAnother: true,
      },
      season: {
        icons: [
          "season-autumn.png",
          "season-spring.png",
          "season-summer.png",
          "season-winter.png",
        ],
        countInSet: 1,
        matchesWithAnother: true,
      },
    },
  },
};
