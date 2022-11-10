export default class HTML5Audio {
  private readonly music = new Audio();

  constructor(src: string) {
    const music = this.music;
    music.preload = 'auto';
    music.src = src;
    music.load();

    // music.addEventListener(
    //   "ended",
    //   () => {
    //     music.currentTime = 0;
    //     music.play();
    //   },
    //   false
    // );
  }
  play(volume = 0.1, loop = false) {
    const music = this.music;
    music.volume = volume;
    music.loop = loop;
    music.play();
  }

  stop() {
    const music = this.music;
    music.pause();
    music.currentTime = 0;
  }
}
