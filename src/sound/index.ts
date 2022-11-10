import HTML5Audio from "../HTML5Audio";

const tileClickSound = new HTML5Audio(
  "./audio/notanomori_200812290000000028.wav"
);
const cancelSound = new HTML5Audio("./audio/se_tte.mp3");

const answerSound = new HTML5Audio("./audio/crrect_answer2.mp3");

export { tileClickSound, cancelSound, answerSound };
