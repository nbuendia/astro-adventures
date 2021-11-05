import Phaser from "phaser";
import SpaceScene from "./scenes/spaceScene";

const config = {
  type: Phaser.AUTO,
  scene: [SpaceScene],
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
};

new Phaser.Game(config);
