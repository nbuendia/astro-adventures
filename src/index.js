import Phaser from "phaser";
import SpaceScene from "./scenes/spaceScene";

const config = {
  type: Phaser.AUTO,
  scene: [SpaceScene],
  width: 1000,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

new Phaser.Game(config);
