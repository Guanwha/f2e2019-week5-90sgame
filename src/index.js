import Phaser from "phaser";
import gameStart from './js/gameStart';
import gamePlay from './js/gamePlay';

const config = {
  type: Phaser.AUTO,
  parent: "app",
  width: 1366,
  height: 768,
  scene: [
    gameStart,
    gamePlay
  ]
};

const game = new Phaser.Game(config);
