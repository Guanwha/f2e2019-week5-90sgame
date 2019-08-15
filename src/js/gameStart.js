
const gameStart = {
  key: 'gameStart',
  preload: function() {
    this.load.image('bg1', require('../assets/gamecover.png'));
    this.load.image('btnPlay', require('../assets/button_play.png'));
    this.load.image('btnHint', require('../assets/button_hint.png'));
    // this.load.spritesheet('btnHint2', require('../assets/button_hint.png'), {frameWidth: 100, frameHeight: 100});
  },
  create: function() {
    this.add.image(0, 0, 'bg1').setOrigin(0);
    this.btnPlay = this.add.image(803, 577, 'btnPlay').setOrigin(0).setInteractive();
    this.btnHint = this.add.image(908, 599, 'btnHint').setOrigin(0).setInteractive();
    // this.btnHint2 = this.add.button(908, 699, 'btnHint2', () => {
    //   console.log('clicked');
    // }).setOrigin(0).setInteractive();

    this.btnPlay.on('pointerup', () => {
      console.log('press the play button');
    });
    this.btnHint.on('pointerup', () => {
      console.log('press the hint button');
    });
  },
  update: function() {
  },
};

export default gameStart;
